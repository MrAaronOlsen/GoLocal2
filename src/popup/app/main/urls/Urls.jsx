import React from 'react'

import { Url } from './url'
import { UrlModel } from 'models'
import { UrlStorage } from 'storage'
import { Config } from 'config'
import { Gear } from 'icons'
import { EventBus, Events } from 'event'

import * as styles from './styles.mod.scss'

export default function Urls({ }) {
  const [urls, setUrls] = React.useState([])

  React.useEffect(() => {
    new UrlStorage().getAll(setUrls)
  }, [])

  React.useEffect(() => {
    EventBus.on(Events.ADD_URL, addNew)
    return () => EventBus.remove(Events.ADD_URL, addNew)
  })

  React.useEffect(() => {
    EventBus.on(Events.DELETE_URL, removeUrl)
    return () => EventBus.remove(Events.DELETE_URL, removeUrl)
  })

  const addNew = React.useCallback((data) => {
    setUrls([...urls, UrlModel.withId()])
  })

  const removeUrl = React.useCallback((data) => {
    new UrlStorage().deleteUrl(data.detail.id, (container) => { })

    setUrls(urls.filter(function (url) {
      return url.getId() !== data.detail.id
    }))
  })

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {urls.map((url) => {
          return (
            <Url key={url.getId()} modelIn={url} />
          )
        })}
      </div>
    </div>
  )
}
