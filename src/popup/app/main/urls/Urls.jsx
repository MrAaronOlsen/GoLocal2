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
    EventBus.on(Events.ADD_URL, addUrl)
    return () => EventBus.remove(Events.ADD_URL, addUrl)
  })

  const addUrl = React.useCallback((data) => {
    let newUrl = UrlModel.withId()

    setUrls([...urls, newUrl])
    updateEditSet(newUrl.getId())
  })

  React.useEffect(() => {
    EventBus.dispatch(Events.EDIT_MODE_CHANGED, {
      editSet: editSet
    })
  }, [editSet])

  function editListener(model) {
    updateEditSet(model.getId())
  }

  function saveListener(model) {
    new UrlStorage().setUrl(model, () => {
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
    if (!editSet.delete(modelId)) {
      editSet.add(modelId)
    }

    setEditSet(new Set(editSet))
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
