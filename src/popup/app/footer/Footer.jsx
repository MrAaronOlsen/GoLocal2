import React from 'react'
import styles from './styles.mod.scss'

import { UrlStorage } from 'storage'

export default function Footer({}) {
  function clear() {
    UrlStorage.clear()
    setUrls([])
  }

  return (
    <div className={styles.container}>
      <div onClick={clear}>Clear</div>
    </div>
  )
}
