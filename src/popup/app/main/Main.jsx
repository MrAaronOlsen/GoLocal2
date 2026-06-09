import React from 'react'

import { Urls } from './urls'

import * as styles from './styles.mod.scss'

export default function Main({ }) {
  return (
    <div className={styles.container}>
      <Urls />
    </div>
  )
}
