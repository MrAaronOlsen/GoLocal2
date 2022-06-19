import React from 'react'

import { Urls } from './urls'
import styles from './styles.mod.scss'

export default function Config({}) {
  return (
    <div className={styles.container}>
      <Urls />
    </div>
  )
}
