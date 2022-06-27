import React from 'react'

import { DebugStateModel } from 'models'
import { toggleDebugRefOn, toggleDebugRefOff, SetIcon } from 'scripts'
import { DebugStateStorage } from 'storage'

import UrlForm from './urlform/UrlForm'

import styles from './styles.mod.scss'

const debugStateStorage = new DebugStateStorage()

export default function Url({ modelIn }) {
  const [model, setModel] = React.useState(modelIn)
  const [edit, setEdit] = React.useState(false)
  const [active, setActive] = React.useState(false)

  React.useEffect(() => {
    if (!model.validate()) {
      setEdit(true)
    }
  }, [modelIn])

  function toggleEdit() {
    setEdit(!edit)
  }

  React.useEffect(() => {
    getStateForCurrentTab((state, tabId) => {
      console.log('Checking state of current tab...')
      console.log(state.toJson())

      if (!state) {
        return
      }

      let activeUrlId = state.getUrlId()
      if (activeUrlId && activeUrlId === model.getId()) {
        setActive(true)
      }
    })
  }, [])

  function onFormChange(name, url, port) {
    let newModel = model.clone().setName(name).setUrl(url).setPort(port)
    console.log(newModel.toJson())
    setModel(newModel)
  }

  function setDebug() {
    getStateForCurrentTab((state, tabId) => {
      let activeUrlId = state.getUrlId()

      if (activeUrlId && activeUrlId === model.getId()) {
        toggleDebugRefOff(tabId, (result) => {
          if (result) {
            state.setUrlId(null)

            debugStateStorage.setState(tabId, state, (newState) => {
              if (newState.getUrlId() == null) {
                setActive(false)
                SetIcon.setReady(tabId)
              }
            })
          }
        })
      } else {
        toggleDebugRefOn(tabId, model, (result) => {
          if (result) {
            state.setUrlId(model.getId())

            debugStateStorage.setState(tabId, state, (newState) => {
              if (newState.getUrlId() == model.getId()) {
                setActive(true)
                SetIcon.setLive(tabId)
              }
            })
          }
        })
      }
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.static}>
        <div className={styles.title} onClick={setDebug}>
          {buildTitle(model, active)}
        </div>
        <div className={styles.edit} onClick={toggleEdit}>
          Edit
        </div>
      </div>
      {edit && (
        <UrlForm
          model={model}
          onFormChange={onFormChange}
          onSave={toggleEdit}
        />
      )}
    </div>
  )
}

function buildTitle(model, active) {
  let name = model.getName() || 'Name'
  let url = model.getUrl() || 'Url'
  let port = model.getPort() || 'Port'

  return `${active ? 'Active: ' : ''} ${name} ${url}:${port}`
}

function getStateForCurrentTab(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let tabId = tabs[0].id

    debugStateStorage.getState(tabId, (state) => {
      if (!state) {
        debugStateStorage.setState(tabId, new DebugStateModel(), (newState) => {
          callback(newState, tabId)
        })
      } else {
        callback(state, tabId)
      }
    })
  })
}
