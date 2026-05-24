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
  const [ws, setWs] = React.useState(model.getWebSocket())
  const [wsPort, setWsPort] = React.useState(model.getWebSocketPort())
  const [auth, setAuth] = React.useState(model.getAuth())
  const [authPort, setAuthPort] = React.useState(model.getAuthPort())

  React.useEffect(() => {
    onFormChange(name, url, port, ws, wsPort, auth, authPort)
  }, [name, url, port, ws, wsPort, auth, authPort])

  function save() {
    model.setName(name)
      .setUrl(url)
      .setPort(port)
      .setWebSocket(ws)
      .setWebSocketPort(wsPort)
      .setAuth(auth)
      .setAuthPort(authPort)

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
        <div className={styles.url}>
          <TextInput title="Auth Url" name="auth" placeholder="Auth Url" value={auth} onChange={setAuth} />
          <TextInput title="WSPort" name="authport" placeholder="Auth Url Port" value={authPort} onChange={setAuthPort} />
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
