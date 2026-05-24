import React from 'react'

import { testDebugStatus, toggleDebugRef, getActiveTab, updateIcon } from 'scripts'
import { On, Wrench } from 'icons'
import { EventBus, Events } from 'event'
import { DebugStateStorage } from 'storage'

import UrlConfig from './urlconfig/UrlConfig'

import * as styles from './styles.mod.scss'

export default function Url({ modelIn }) {
  const [model, setModel] = React.useState(modelIn)
  const [edit, setEdit] = React.useState(false)
  const [active, setActive] = React.useState(false)

  React.useEffect(() => {
    if (!modelIn.validate()) {
      setEdit(true)
      setModel(modelIn)
    }
  }, [modelIn])

  React.useEffect(() => {
    getActiveTab(tabId => {
      testDebugStatus(tabId, (status, result) => {

        switch (status) {
          case ('DISABLED'): setActive(false); break
          case ('READY'): setActive(false); break
          case ('LIVE'): {
            let version = result.version;

            if (version === 'V2') {
              let ref = result.ref
              setActive(ref.url === model.getUrl())
            } else {
              new DebugStateStorage().getStateForActiveTab((state, tabId) => {
                if (!state) {
                  setActive(false)
                } else {
                  setActive(state.getUrlId() === model.getId())
                }
              })
            }

            break
          }
        }
      })
    })
  }, [])

  React.useEffect(() => {
    EventBus.dispatch(Events.EDIT_MODE_CHANGED, {
      editMode: edit,
    })
  }, [edit])

  function toggleEdit() {
    setEdit(!edit)
  }

  function onFormChange(name, url, port, ws, wsPort, auth, authPort) {
    let newModel = model.clone()
      .setName(name)
      .setUrl(url)
      .setPort(port)
      .setWebSocket(ws)
      .setWebSocketPort(wsPort)
      .setAuth(auth)
      .setAuthPort(authPort)

    setModel(newModel)
  }

  function toggleDebugRefMode() {
    toggleDebugRef(model, (debugStateId) => {
      getActiveTab(tabId => {
        updateIcon(tabId)
      })

      setActive(debugStateId)
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.status}>
          {active ? <On size='20px' /> : null}
        </div>
        <div className={styles.title} onClick={toggleDebugRefMode}>
          <div className={styles.name}>{getName(model)}</div>
          <div className={styles.detail}>{getUrlDetail(model)}</div>
          <div className={styles.detail}>{getWSDetail(model)}</div>
          <div className={styles.detail}>{getAuthDetail(model)}</div>
        </div>
        {!edit && <Wrench title='Edit config' size="20px" onClick={toggleEdit} />}
      </div>
      {edit && (
        <UrlConfig
          model={model}
          onFormChange={onFormChange}
          onSave={toggleEdit}
        />
      )}
    </div>
  )
}

function getName(model) {
  return model.getName() || 'Name'
}

function getUrlDetail(model) {
  let url = model.getUrl()
  let port = model.getPort()

  if (url || port) {
    return `${url}:${port}`
  }

  return null
}

function getWSDetail(model) {
  let ws = model.getWebSocket()
  let port = model.getWebSocketPort()

  if (ws || port) {
    return `${ws}:${port}`
  }

  return null
}

function getAuthDetail(model) {
  let auth = model.getAuth()
  let authPort = model.getAuthPort()

  if (auth || authPort) {
    return `${auth}:${authPort}`
  }

  return null
}
