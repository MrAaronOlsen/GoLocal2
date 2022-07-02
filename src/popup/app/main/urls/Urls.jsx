import React from 'react'

import { Url } from './url'
import { UrlModel } from 'models'
import { UrlStorage } from 'storage'

import styles from './styles.mod.scss'

export default function Urls({}) {
  const [urls, setUrls] = React.useState([])

  React.useEffect(() => {
    new UrlStorage().getAll(setUrls)
  }, [])

  function addNew() {
    setUrls([...urls, UrlModel.withId()])
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>Urls</div>
      <div className={styles.list}>
        {urls.map((url) => {
          return <Url key={url.getId()} modelIn={url} />
        })}
      </div>
      <div className={styles.footer}>
        <div onClick={addNew}>Add</div>
      </div>
    </div>
  )
}
