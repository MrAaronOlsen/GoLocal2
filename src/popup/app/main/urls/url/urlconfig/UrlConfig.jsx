import React from 'react'

import { UrlStorage } from 'storage'
import { TextInput, BooleanInput } from 'input'
import { Button } from 'button'
import { EventBus, Events } from 'event'
import { Disk, Trash } from 'icons'

import * as styles from './styles.mod.scss'

export default function UrlConfig({ model, onFormChange, onSave }) {
  const [name, setName] = React.useState(model.getName())
  const [url, setUrl] = React.useState(model.getUrl())
  const [port, setPort] = React.useState(model.getPort())
  const [ws, setWs] = React.useState(model.getWebSocketUrl())
  const [wsPort, setWsPort] = React.useState(model.getWebSocketPort())

  React.useEffect(() => {
    onFormChange(name, url, port, ws, wsPort)
  }, [name, url, port, ws, wsPort])

  function save() {
    model.setName(name)
      .setUrl(url)
      .setPort(port)
      .setWebSocketUrl(ws)
      .setWebSocketPort(wsPort)

    new UrlStorage().setUrl(model, onSave)
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
          <TextInput title="Web Socket" name="ws" placeholder="Web Socket" value={ws} onChange={setWs} />
          <TextInput title="WSPort" name="wsport" placeholder="Web Socket Port" value={wsPort} onChange={setWsPort} />
        </div>

      </div>
      <div className={styles.footer}>
        <Disk title='Save' size={"20px"} onClick={save} />

        <Trash title='Delete' size={"20px"} onClick={() =>
          EventBus.dispatch(Events.DELETE_URL, { id: model.getId() })
        } />
      </div>
    </div>
  )
}
