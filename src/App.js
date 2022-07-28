import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./pages/cart/Cart";
import Product from "./pages/product/Product";
import Home from "./pages/Home/Home";
import Layout from "./components/layout/Layout";

const productsList = [
  { id: 1, name: "casual v-neck", price: "$200", image: "https://picsum.photos/200/200" },
  { id: 2, name: "casual T-shirt", price: "$250", image: "https://picsum.photos/200/201" },
  { id: 3, name: "casual jean ", price: "$300", image: "https://picsum.photos/200/202" },
  { id: 4, name: "casual jacket ", price: "$85", image: "https://picsum.photos/200/203" },
  { id: 5, name: "casual leg", price: "$58", image: "https://picsum.photos/200/204" },
  { id: 6, name: "casual hat", price: "$72", image: "https://picsum.photos/200/205" },
];

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState({});
  const [page, setPage] = useState("home");

  const addToCart = (product) => {
    const productExists = cart.find((item) => item.id === product.id);

    if (productExists) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          item.quantity++;
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    if (product.quantity > 1) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          item.quantity--;
        }
        return item;
      });
      setCart(newCart);
    } else {
      const newCart = cart.filter((item) => item.id !== product.id);
      setCart(newCart);
    }
  };

  const emptyCart = () => {
    setCart([]);
  };

  const setProductDetails = (product) => {
    setProduct(product);
    setPage("product");
  };

  const handlePage = (p) => {
    setPage(p);
  };

  useEffect(() => {
    setProducts(productsList);
    setCart(JSON.parse(localStorage.getItem("cart")))
  }, []);
  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart])

  return (
    <>

      {page === "home" &&
      <Layout cart={cart} handlePage={handlePage}>
        <Home products={products} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} setProductDetails={setProductDetails} />
      </Layout>
       }
      {page === "product" && <Product product={product} handlePage={handlePage} addToCart={addToCart} cart={cart}/>}
      {page === "cart" && 
      <Layout cart={cart} handlePage={handlePage}>
        <Cart cart={cart} removeFromCart={removeFromCart} handlePage={handlePage} emptyCart={emptyCart} />
      </Layout>
      }
    </>
  );
}

export default App;
