import React from 'react'

import { ConfigStorage } from 'storage'

import ThemeConfig from './themeconfig/ThemeConfig'
import StorageConfig from './storageconfig/StorageConfig'
import styles from './styles.mod.scss'

const configStorage = new ConfigStorage()

export default function Config() {
  function getConfig(callback) {
    configStorage.getConfig(callback)
  }

  function setConfig(config, callback) {
    configStorage.setConfig(config, callback)
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
          <StorageConfig getConfig={getConfig} setConfig={setConfig} />
        </div>
      </div>
    </div>
  )
}
