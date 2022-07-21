import React from 'react'

import { toggleDebugRef } from 'scripts'
import { Gear } from 'icons'

import UrlForm from './urlform/UrlForm'

import styles from './styles.mod.scss'

export default function Url({ modelIn, active, setActive }) {
  const [model, setModel] = React.useState(modelIn)
  const [edit, setEdit] = React.useState(false)

  React.useEffect(() => {
    if (!modelIn.validate()) {
      setEdit(true)
      setModel(modelIn)
    }
  }, [modelIn])

  function toggleEdit() {
    setEdit(!edit)
  }

  function onFormChange(name, url, port) {
    let newModel = model.clone().setName(name).setUrl(url).setPort(port)
    console.log(newModel.toJson())
    setModel(newModel)
  }

  function toggleDebugRefMode() {
    toggleDebugRef(model, setActive)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.status}>
          {active === model.getId() ? 'On' : ''}
        </div>
        <div className={styles.title} onClick={toggleDebugRefMode}>
          <div className={styles.name}>{getName(model)}</div>
          <div className={styles.detail}>{getDetail(model)}</div>
        </div>
        <div className={styles.edit} onClick={toggleEdit}>
          <Gear size="20px" color="var(--surface-on)" />
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

function getName(model) {
  return model.getName() || 'Name'
}

function getDetail(model) {
  let url = model.getUrl() || 'Url'
  let port = model.getPort() || 'Port'

  return `${url}:${port}`
}
