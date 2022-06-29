import React from 'react'

import { Header } from './header'
import { Config } from './config'
import { Footer } from './footer'

import { GlobalStyle, dark, light } from 'theme'
import styles from './styles.mod.scss'

export default function App() {
  return (
    <React.Fragment>
      <GlobalStyle {...dark} />
      <div className={styles.container}>
        <Header />
        <Config />
        <Footer />
      </div>
    </React.Fragment>
  )
}
