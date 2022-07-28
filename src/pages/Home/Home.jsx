import React from "react";
import styles from './Home.module.css'
import { Icon } from '@iconify/react';

export default function Home({ products, setProductDetails }) {
  return (
    <div className={styles.main}>
      <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
        <div style={{width:"70%",margin:"30px 0px 30px 0px",display:"flex",alignItems:"center",boxShadow:"1px 1px 5px silver",borderRadius:"15px",padding:"10px"}}>
        <Icon icon="carbon:search" color="gray" width="25" height="25" />
          <input style={{border:"none",outline:"none",}} type="text" />
        </div>
        <div style={{padding:"10px",backgroundColor:"pink",borderRadius:"10px",boxShadow:"1px 1px 5px silver"}}>
        <Icon icon="ci:slider-01" color="white" width="25" height="25" />
        </div>
      </div>
      <ul className={styles.carts}>
        {products.map((product) => (
          <li className={styles.li} key={product.id} product={product}>
            <img className={styles.imgs} src={product.image} alt={product.name} onClick={() => setProductDetails(product)} />
            <h4>{product.name}</h4>
            <p className={styles.p}>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
