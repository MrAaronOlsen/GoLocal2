import React from 'react'

import { Header } from './header'
import { Config } from './config'
import { Footer } from './footer'

import { Theme } from 'theme'
import styles from './styles.mod.scss'

export default function App() {
  return (
    <React.Fragment>
      <Theme />
      <div className={styles.container}>
        <Header />
        <Config />
        <Footer />
      </div>
    </React.Fragment>
  )
}
