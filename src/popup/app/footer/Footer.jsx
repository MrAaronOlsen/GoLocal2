import React from 'react'
import styles from './styles.mod.scss'

import { Config } from 'popup/app/config'

import Gear from 'assets/gear.png'

export default function Footer({ navigate }) {
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={navigate.pop}>
        {navigate.size() > 1 && 'Back'}
      </div>

      {navigate.current() !== "config" && <img src={Gear} onClick={() => navigate.add("config", <Config />)} />}
    </div>
  )
}
