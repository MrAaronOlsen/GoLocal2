import React from 'react'
import styles from './styles.mod.scss'

import { EventBus, Events } from 'event'
import { UrlStorage } from 'storage'

import Gear from 'assets/gear.png'

export default function Footer({}) {
  function clear() {
    new UrlStorage().clear()
  }

  function changeTheme(theme) {
    EventBus.dispatch(Events.THEME_CHANGED, {
      theme: theme,
    })
  }

  return (
    <div className={styles.container}>
      <div onClick={clear}>Clear</div>
      <div onClick={() => changeTheme('light')}>Light</div>
      <div onClick={() => changeTheme('dark')}>Dark</div>
      <img src={Gear} />
    </div>
  )
}
