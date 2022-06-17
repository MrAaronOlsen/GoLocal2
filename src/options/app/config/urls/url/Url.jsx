import React from 'react'

import { TextInput } from 'input'

import styles from './styles.mod.scss'

export default function Url({}) {
  const [name, setName] = React.useState('')
  const [url, setUrl] = React.useState('')
  const [port, setPort] = React.useState('')

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
    </div>
  )
}
