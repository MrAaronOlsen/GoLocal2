import React from 'react'

import { Config } from 'popup/app/config'
import { RefProvider } from 'ref'
import { Theme } from 'theme'

import { Footer } from './Footer'
import { Header } from './Header'
import { Main } from './Main'

import * as styles from './styles.mod.scss'

const PAGES = {
  main: Main,
  config: Config,
}

export default function App() {
  const [stack, setStack] = React.useState(['main'])

  const navigate = {
    size: () => stack.length,
    current: () => stack.at(-1),
    add: (name) => setStack(prev => [...prev, name]),
    pop: () => setStack(prev => (prev.length > 1 ? prev.slice(0, -1) : prev)),
  }

  const Page = PAGES[stack.at(-1)]

  return (
    <React.Fragment>
      <Theme />
      <RefProvider>
        <div className={styles.container}>
          <Header />
          <Page />
          <Footer navigate={navigate} />
        </div>
      </RefProvider>
    </React.Fragment>
  )
}
