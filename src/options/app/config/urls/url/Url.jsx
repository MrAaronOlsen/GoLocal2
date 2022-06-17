import React from 'react'

import { UrlStorage } from 'storage'
import { TextInput } from 'input'

import styles from './styles.mod.scss'

export default function Url({ model }) {
  const [name, setName] = React.useState(model.getName())
  const [url, setUrl] = React.useState(model.getUrl())
  const [port, setPort] = React.useState(model.getPort())

  function persist() {
    model.setName(name).setUrl(url).setPort(port)

    UrlStorage.setUrl(model)
  }

  return (
    <div className={styles.container}>
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
      <div onClick={persist}>Save</div>
    </div>
  )
}
