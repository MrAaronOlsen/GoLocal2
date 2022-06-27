import React from 'react'
import styles from './styles.mod.scss'

import { UrlStorage } from 'storage'

export default function Footer({}) {
  function clear() {
    new UrlStorage().clear()
  }

  return (
    <div className={styles.container}>
      <div onClick={clear}>Clear</div>
    </div>
  )
}
