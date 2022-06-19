import React from 'react'

import { Header } from './header'
import { Config } from './config'

import styles from './styles.mod.scss'

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Config />
    </div>
  )
}
