import React from 'react'

import { Disk, Trash } from 'icons'
import { TextInput } from 'input'

import * as styles from './styles.mod.scss'

export default function UrlConfig({ model, onEdit, onSave, onDelete }) {
  const [name, setName] = React.useState(model.getName())
  const [netProto, setNetProto] = React.useState(model.getNetProtocall() || 'http://')
  const [netDomain, setNetDomain] = React.useState(model.getNetDomain())
  const [netPort, setNetPort] = React.useState(model.getNetPort() || '8084')
  const [wsProto, setWSProto] = React.useState(model.getWSProtocall() || 'ws://')
  const [wsDomain, setWSDomain] = React.useState(model.getWSDomain())
  const [wsPort, setWSPort] = React.useState(model.getWSPort() || '8084')

  React.useEffect(() => {
    onEdit(name, netProto, netDomain, netPort, wsProto, wsDomain, wsPort)
  }, [name, netProto, netDomain, netPort, wsProto, wsDomain, wsPort])

  function handleSave() {
    onSave()
  }

  function handleDelete() {
    onDelete()
  }

  return (
    <div className={styles.container}>

      <div className={styles.form}>
        <div className={styles.name}>
          <TextInput title="Name" name="name" placeholder="Name" value={name} onChange={setName} />
        </div>
        <div className={styles.url}>
          <TextInput title="Protocall" name="net_proto" placeholder="http://" value={netProto} onChange={setNetProto} />
          <TextInput title="Domain" name="net_domain" placeholder="foo.bar" value={netDomain} onChange={setNetDomain} />
          <TextInput title="Port" name="net_port" placeholder="8084" value={netPort} onChange={setNetPort} />
        </div>
        <div className={styles.url}>
          <TextInput title="Protocall" name="ws_protocall" placeholder="ws://" value={wsProto} onChange={setWSProto} />
          <TextInput title="Domain" name="ws_domain" placeholder="foo.bar" value={wsDomain} onChange={setWSDomain} />
          <TextInput title="Port" name="ws_port" placeholder="8084" value={wsPort} onChange={setWSPort} />
        </div>

      </div>
      <div className={styles.footer}>
        <Disk title='Save' size={"20px"} onClick={handleSave} />
        <Trash title='Delete' size={"20px"} onClick={handleDelete} />
      </div>
    </div>
  )
}
