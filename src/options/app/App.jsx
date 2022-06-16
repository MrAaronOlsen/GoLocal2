import React from 'react'

import { TextInput } from 'input'

import styles from './styles.mod.scss'

export default function App() {
  const [url, setUrl] = React.useState('')

  return (
    <div className={styles.container}>
      <TextInput name="url" placeholder="Url" value={url} onChange={setUrl} />
    </div>
  )
}
