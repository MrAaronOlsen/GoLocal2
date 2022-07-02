import React from 'react'

import { UrlStorage } from 'storage'
import { ConfigStorage } from 'storage'

import { ThemeConfig } from './themeconfig'
import styles from './styles.mod.scss'

const configStorage = new ConfigStorage()

export default function Config() {
  function getConfig(callback) {
    configStorage.getConfig(callback)
  }

  function setConfig(config, callback) {
    configStorage.setConfig(config, callback)
  }

  function clear() {
    new UrlStorage().clear()
  }

  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.title}>THEME</div>
        <div className={styles.body}>
          <ThemeConfig getConfig={getConfig} setConfig={setConfig} />
        </div>
      </div>
      <div className={styles.frame}>
        <div className={styles.title}>STORAGE</div>
        <div className={styles.body}>
          <div onClick={clear}>Clear Storage</div>
        </div>
      </div>
    </div>
  )
}
