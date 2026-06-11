import React from 'react'

import * as styles from './styles.mod.scss'
import GoLocal from 'assets/logo_128.png'

export default function Header({ }) {
  return (
    <div className={styles.container}>
      <img src={GoLocal} width="30px" height="30px" className={styles.icon} />
      <div className={styles.title}>GoLocal</div>
    </div>
  )
}
