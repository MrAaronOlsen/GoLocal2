import React from 'react'

import { Url } from './url'
import { UrlStorage } from 'storage'

import styles from './styles.mod.scss'

export default function Urls({}) {
  const [urls, setUrls] = React.useState([])

  React.useEffect(() => {
    UrlStorage.getAll(setUrls)
  }, [])

  return (
    <div className={styles.container}>
      {urls.map((url) => {
        return <Url key={url.getName()} url={url} />
      })}
    </div>
  )
}
