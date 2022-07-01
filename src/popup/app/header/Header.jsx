import React from 'react'
import styles from './styles.mod.scss'

import GoLocal from 'assets/live/cloud_128.png'

export default function Header({}) {
  return (
    <div className={styles.container}>
      <img src={GoLocal} width="30px" height="30px" />
      <div className={styles.title}>GoLocal 2</div>
    </div>
  )
}
