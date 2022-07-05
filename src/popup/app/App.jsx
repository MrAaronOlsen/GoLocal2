import React from 'react'

import { Header } from './header'
import { Main } from './Main'
import { Footer } from './footer'

import { Theme } from 'theme'
import styles from './styles.mod.scss'

export default function App() {
  const [pages, setPages] = React.useState([['main', <Main />]])

  const navigate = {
    size: () => pages.length,
    current: () => pages.at(-1)[0],
    add: addPage,
    pop: removePage,
  }

  function addPage(name, page) {
    pages.push([name, page])
    setPages([...pages])
  }

  function removePage() {
    if (pages.length == 1) {
      return
    }

    pages.pop()
    setPages([...pages])
  }

  return (
    <React.Fragment>
      <Theme />
      <div className={styles.container}>
        <Header />
        {pages.at(-1)[1]}
        <Footer navigate={navigate} />
      </div>
    </React.Fragment>
  )
}
