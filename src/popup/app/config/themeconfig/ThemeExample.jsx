import React from 'react'

import styles from './example.mod.scss'

export default function () {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Title</div>
      </div>
      <div className={styles.body}>
        <div className={styles.list}>
          <div className={styles.list_header}>Thing</div>
          <div className={styles.list_body}>
            <div className={styles.list_entry}>Entry</div>
            <div className={styles.list_entry_alt}>Entry</div>
            <div className={styles.list_entry}>Entry</div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.option}>A</div>
        <div className={styles.option}>B</div>
        <div className={styles.option_alt}>C</div>
      </div>
    </div>
  )
}
