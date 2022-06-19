import React from 'react'

import { Url } from './url'
import { UrlModel } from 'models'
import { UrlStorage } from 'storage'

import styles from './styles.mod.scss'

export default function Urls({}) {
  const [urls, setUrls] = React.useState([])

  React.useEffect(() => {
    UrlStorage.getAll(setUrls)
  }, [])

  function addNew() {
    setUrls([...urls, new UrlModel()])
  }

  function clear() {
    UrlStorage.clear()
    setUrls([])
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div onClick={addNew}>Add</div>
        <div onClick={clear}>Clear</div>
      </div>

      <div className={styles.list}>
        {urls.map((url) => {
          return <Url key={url.getId()} model={url} />
        })}
      </div>
    </div>
  )
}
