import React from 'react'

import { UrlStorage } from 'storage'

import styles from './styles.mod.scss'

export default function StorageConfig({ getConfig, setConfig }) {
  const [confirm, setConfirm] = React.useState(false)

  function clear() {
    new UrlStorage().clear()
  }

  return (
    <div className={styles.container}>
      <div className={styles.interact} onClick={() => setConfirm(true)}>
        Clear Storage
      </div>
      {confirm && (
        <div className={styles.confirm}>
          <div className={styles.interact} onClick={() => setConfirm(false)}>
            Cancel
          </div>
          <div className={styles.interact} onClick={clear}>
            Confirm
          </div>
        </div>
      )}
    </div>
  )
}
