import React from "react";
import { Icon } from '@iconify/react';
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.d1}>
      <button className={styles.but1}><Icon icon="dashicons:image-filter" color="pink" width="25" height="25" /></button>
      <div className={styles.d2}>
        <p className={styles.pee}>Hallo zaskia</p>
        <h3 className={styles.ech3}>jakarta,INA</h3>
      </div>
      <button className={styles.but2}><img style={{borderRadius:"50%"}} src="asset/avatar.jpg" alt="" /></button>
    </div>
  );
}
