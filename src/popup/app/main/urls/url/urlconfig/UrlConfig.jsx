import React from 'react'

import { TextInput } from 'input'
import { Disk, Trash } from 'icons'

import * as styles from './styles.mod.scss'

export default function UrlConfig({ model, onEdit, onSave, onDelete }) {
  const [name, setName] = React.useState(model.getName())
  const [url, setUrl] = React.useState(model.getUrl())
  const [port, setPort] = React.useState(model.getPort())
  const [wsUrl, setWsUrl] = React.useState(model.getWebSocketUrl())
  const [wsPort, setWsPort] = React.useState(model.getWebSocketPort())

  React.useEffect(() => {
    onEdit(name, url, port, wsUrl, wsPort)
  }, [name, url, port, wsUrl, wsPort])

  function handleSave() {
    onSave()
  }

  function handleDelete() {
    onDelete()
  }

  return (
    <div className={styles.container}>

      <div className={styles.form}>
        <TextInput
          title="Name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={setName}
        />
        <div className={styles.url}>
          <TextInput title="Network Url" name="url" placeholder="Network Url" value={url} onChange={setUrl} />
          <TextInput title="Port" name="port" placeholder="Network Port" value={port} onChange={setPort} />
        </div>
        <div className={styles.url}>
          <TextInput title="Web Socket" name="ws" placeholder="Web Socket" value={wsUrl} onChange={setWsUrl} />
          <TextInput title="WSPort" name="wsport" placeholder="Web Socket Port" value={wsPort} onChange={setWsPort} />
        </div>

      </div>
      <div className={styles.footer}>
        <Disk title='Save' size={"20px"} onClick={handleSave} />
        <Trash title='Delete' size={"20px"} onClick={handleDelete} />
      </div>
    </div>
  )
}
