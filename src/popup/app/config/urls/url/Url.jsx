import React from 'react'

import UrlForm from './urlform/UrlForm'

import styles from './styles.mod.scss'

export default function Url({ model }) {
  const [edit, setEdit] = React.useState(false)
  const [title, setTitle] = React.useState(null)

  React.useEffect(() => {
    onFormChange(model.getName(), model.getUrl(), model.getPort())
  }, [model])

  function toggleEdit() {
    setEdit(!edit)
  }

  function onFormChange(name, url, port) {
    setTitle(`${name} ${url}:${port}`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.static}>
        <div className={styles.title}>{title}</div>
        <div className={styles.edit} onClick={toggleEdit}>
          Edit
        </div>
      </div>
      {edit && (
        <UrlForm
          model={model}
          onFormChange={onFormChange}
          onSave={toggleEdit}
        />
      )}
    </div>
  )
}
