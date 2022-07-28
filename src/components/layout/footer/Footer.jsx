import React from "react";
import styles from './Footer.module.css'
import { Icon } from '@iconify/react';

export default function Fotter({ cart, handlePage }) {
  const total = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
      <div className={styles.footer}>
        <div>
        <Icon onClick={() => handlePage("home")} color="pink" icon="codicon:home" width="30" height="30" />
        </div>
        <div>
        <Icon icon="codicon:note" color="pink" width="30" height="30" />
        </div>
        <div>
        <Icon onClick={() => handlePage("cart")} icon="ant-design:shopping-cart-outlined" color="pink" width="30" height="30" />
      <span>{cart.length > 0 && <span style={{ backgroundColor: "green", color: "white", margin: "10px", padding: "2px", borderRadius: "5px" }}>{total}</span>}</span>
        </div>
        <div>
        <Icon icon="ant-design:user-outlined" color="pink" width="30" height="30" />
        </div>
    </div>
  );
}
