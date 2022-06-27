import React from 'react'

import { toggleDebugRefOn, toggleDebugRefOff, SetIcon } from 'scripts'

import UrlForm from './urlform/UrlForm'

import styles from './styles.mod.scss'

export default function Url({ modelIn }) {
  const [model, setModel] = React.useState(modelIn)
  const [edit, setEdit] = React.useState(false)

  function toggleEdit() {
    setEdit(!edit)
  }

  function onFormChange(name, url, port) {
    let newModel = model.clone().setName(name).setUrl(url).setPort(port)
    console.log(newModel.toJson())
    setModel(newModel)
  }

  function setDebug() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let activeTab = tabs[0]

      toggleDebugRefOn(activeTab.id, model, (result) => {
        if (result) {
          SetIcon.setLive(activeTab.id)
        }
      })
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.static}>
        <div className={styles.title} onClick={setDebug}>
          {`${model.getName()} ${model.getUrl()}:${model.getPort()}`}
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
