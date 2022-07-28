import React from "react";
import styles from './Product.module.css'
import { Icon } from '@iconify/react';
import Span from '../../components/spanStyle/Span'


export default function Product({ product, addToCart, handlePage, cart }) {
  const total = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div>
      <img className={styles.img} src={product.image} alt={product.name} />
      <div className={styles.typo}>
        <h2> {product.name} </h2>
        <h2> {product.price} </h2>
      </div>
      <p className={styles.p1}>Dagadu jacket</p>
      <p className={styles.p2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus deleniti aspernatur sequi dolorem molestiae quam, nostrum veniam facilis officia consequatur dicta esse ducimus! Porro vitae id facilis illo, perferendis non!</p>
      <div className={styles.footer}>
        <div>
        <button className={styles.bt1} onClick={() => addToCart(product)}> buy now </button>
        </div>
      <div>
        <button className={styles.bt2} onClick={() => handlePage("cart")}><Icon onClick={() => handlePage("cart")} icon="ant-design:shopping-cart-outlined" color="pink" width="30" height="30" /> </button>
        <span>{cart.length > 0 && <Span total={total}/>}</span>
      </div>
      </div>
    </div>
  );
}
