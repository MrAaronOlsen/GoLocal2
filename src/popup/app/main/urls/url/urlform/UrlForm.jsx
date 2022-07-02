import React from 'react'

import { UrlStorage } from 'storage'
import { TextInput } from 'input'

import styles from './styles.mod.scss'

export default function UrlForm({ model, onFormChange, onSave }) {
  const [name, setName] = React.useState(model.getName())
  const [url, setUrl] = React.useState(model.getUrl())
  const [port, setPort] = React.useState(model.getPort())

  React.useEffect(() => {
    onFormChange(name, url, port)
  }, [name, url, port])

  function save() {
    model.setName(name).setUrl(url).setPort(port)
    new UrlStorage().setUrl(model, onSave)
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <TextInput
          name="name"
          placeholder="Name"
          value={name}
          onChange={setName}
        />
        <TextInput name="url" placeholder="Url" value={url} onChange={setUrl} />
        <TextInput
          name="port"
          placeholder="Port"
          value={port}
          onChange={setPort}
        />
      </div>
      <div className={styles.footer} onClick={save}>
        Save
      </div>
    </div>
  )
}
