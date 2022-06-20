import React from 'react'

import { UrlStorage } from 'storage'
import { TextInput } from 'input'

import styles from './styles.mod.scss'

export default function Url({ model }) {
  const [name, setName] = React.useState(model.getName())
  const [url, setUrl] = React.useState(model.getUrl())
  const [port, setPort] = React.useState(model.getPort())
  const [edit, setEdit] = React.useState(false)

  function persist() {
    model.setName(name).setUrl(url).setPort(port)
    UrlStorage.setUrl(model, () => {
      setEdit(false)
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <TextInput
          name="name"
          placeholder="Name"
          value={name}
          onChange={setName}
          disable={!edit}
        />
        <div>:</div>
        <TextInput
          name="url"
          placeholder="Url"
          value={url}
          onChange={setUrl}
          disable={!edit}
        />
        <TextInput
          name="port"
          placeholder="Port"
          value={port}
          onChange={setPort}
          disable={!edit}
        />
      </div>
      {edit ? (
        <div onClick={persist}>Save</div>
      ) : (
        <div onClick={() => setEdit(!edit)}>Edit</div>
      )}
    </div>
  )
}
