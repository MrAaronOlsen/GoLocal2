import React from 'react'

import { Disk, Trash } from 'icons'
import { TextInput } from 'input'
import { Color } from 'theme'

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

  const fields = [name, netProto, netDomain, netPort, wsProto, wsDomain, wsPort]
  const isInvalid = fields.some(isBlank)

  function handleSave() {
    if (isInvalid) {
      return
    }

    onSave()
  }

  function handleDelete() {
    onDelete()
  }

  return (
    <div className={styles.container}>

      <div className={styles.form}>
        <div className={styles.name}>
          <TextInput title="Name" name="name" placeholder="Name" value={name} onChange={setName} styleProps={requiredStyle(name)} />
        </div>
        <div className={styles.url}>
          <TextInput title="Protocall" name="net_proto" placeholder="http://" value={netProto} onChange={setNetProto} styleProps={requiredStyle(netProto)} />
          <TextInput title="Domain" name="net_domain" placeholder="foo.bar" value={netDomain} onChange={setNetDomain} styleProps={requiredStyle(netDomain)} />
          <TextInput title="Port" name="net_port" placeholder="8084" value={netPort} onChange={setNetPort} styleProps={requiredStyle(netPort)} />
        </div>
        <div className={styles.url}>
          <TextInput title="Protocall" name="ws_protocall" placeholder="ws://" value={wsProto} onChange={setWSProto} styleProps={requiredStyle(wsProto)} />
          <TextInput title="Domain" name="ws_domain" placeholder="foo.bar" value={wsDomain} onChange={setWSDomain} styleProps={requiredStyle(wsDomain)} />
          <TextInput title="Port" name="ws_port" placeholder="8084" value={wsPort} onChange={setWSPort} styleProps={requiredStyle(wsPort)} />
        </div>

      </div>
      <div className={styles.footer}>
        <div className={styles.save}>
          <Disk title='Save' size={"20px"} color={isInvalid ? Color.RED.getColor() : null} onClick={handleSave} />
          {isInvalid && (
            <div className={styles.required} style={{ color: Color.RED.getColor() }}>
              Required values in red
            </div>
          )}
        </div>
        <Trash title='Delete' size={"20px"} onClick={handleDelete} />
      </div>
    </div>
  )
}

// Required-field validation: a value is missing when it's empty or whitespace.
function isBlank(value) {
  return !(value && value.trim())
}

// Highlight the input red when its value is blank, otherwise let TextInput
// fall back to the default border.
function requiredStyle(value) {
  return isBlank(value) ? { highlight: Color.RED.getColor() } : undefined
}
