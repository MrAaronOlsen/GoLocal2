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

  return (
    <div className={styles.container}>
      <div onClick={addNew}>Add</div>
      <div onClick={UrlStorage.clear}>Clear</div>

      {urls.map((url) => {
        return <Url key={url.getId()} model={url} />
      })}
    </div>
  )
}
