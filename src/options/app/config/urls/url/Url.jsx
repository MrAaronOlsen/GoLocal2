import React from 'react'

import UrlForm from './urlform/UrlForm'

import styles from './styles.mod.scss'

export default function Url({ model }) {
  const [expand, setExpand] = React.useState()
  const [title, setTitle] = React.useState()

  function onFormChange(model) {
    setTitle(model.name + ': ' + model.url + ':' + model.port)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>{title}</div>
        <div onClick={() => setExpand(!expand)}>Edit</div>
      </div>
      <UrlForm model={model} expand={expand} onFormChange={onFormChange} />
    </div>
  )
}
