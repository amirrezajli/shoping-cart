import React from "react";
import styles from './Cart.module.css'
import Span from '../../components/spanStyle/Span'

function Cart({ cart, removeFromCart, emptyCart }) {
  return (
    <div>
      {cart.length <= 0 && <p>No items in cart</p>}
      <ul style={{padding:"0"}}>
        {cart.map((product) => (
          <li key={product.id} product={product} className={styles.lii}>
            <div style={{ display: "flex" }}>
              <img src={product.image} alt={product.name} className={styles.imgg}/>
              <div style={{display:"flex",flexDirection:"column"}}>
              <div style={{marginTop:"5px"}}>{product.name}</div>
              <div><h3 style={{margin:"7px 0 0 0"}}>{product.price}</h3></div>
              </div>
            </div>
            <Span total={product.quantity}/>
            <button onClick={() => removeFromCart(product)}>-</button>
          </li>
        ))}
      </ul>
      <button className={styles.btt} onClick={() => emptyCart()}>PAy now</button>
    </div>
  );
}

export default Cart;
