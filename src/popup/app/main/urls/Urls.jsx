import React from 'react'

import { EventBus, Events } from 'event'
import { UrlModel } from 'models'
import { UrlStorage } from 'storage'

import { Url } from './url'

import * as styles from './styles.mod.scss'

export default function Urls({ }) {
  const [urls, setUrls] = React.useState([])
  const [editSet, setEditSet] = React.useState(new Set())

  React.useEffect(() => {
    new UrlStorage().getAll(setUrls)
  }, [])

  React.useEffect(() => {
    const addUrl = () => {
      let newUrl = UrlModel.withId()

      setUrls(prev => [...prev, newUrl])
      updateEditSet(newUrl.getId())
    }

    EventBus.on(Events.ADD_URL, addUrl)
    return () => EventBus.remove(Events.ADD_URL, addUrl)
  }, [])

  React.useEffect(() => {
    EventBus.dispatch(Events.EDIT_MODE_CHANGED, {
      editSet: editSet
    })
  }, [editSet])

  function editListener(model) {
    updateEditSet(model.getId())
  }

  function saveListener(model) {
    new UrlStorage().setUrlModel(model, () => {
      updateEditSet(model.getId())
    })
  }

  function deleteListener(model) {
    let modelId = model.getId()
    new UrlStorage().deleteUrl(modelId, (container) => { })

    setUrls(urls.filter(function (url) {
      return url.getId() !== modelId
    }))

    updateEditSet(modelId)
  }

  function updateEditSet(modelId) {

    setEditSet(prev => {
      let next = new Set(prev)

      if (!next.delete(modelId)) {
        next.add(modelId)
      }

      return next
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {urls.map((url) => {
          return (
            <Url key={url.getId()}
              modelIn={url}
              editListener={editListener}
              saveListener={saveListener}
              deleteListener={deleteListener} />
          )
        })}
      </div>
    </div>
  )
}
