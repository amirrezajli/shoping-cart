import React from 'react'
import styles from './Span.module.css'

export default function Span({total}) {
  return (
    <span className={styles.spn}>{total}</span>
  )
}
