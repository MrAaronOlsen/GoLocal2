import React from 'react'
import * as styles from './styles.mod.scss'

import GoLocal from 'assets/live/bar_icon_128.png'


export default function Header({ navigate }) {
  return (
    <div className={styles.container}>
      <img src={GoLocal} width="30px" height="30px" className={styles.icon} />
      <div className={styles.title}>GoLocal</div>
    </div>
  )
}
