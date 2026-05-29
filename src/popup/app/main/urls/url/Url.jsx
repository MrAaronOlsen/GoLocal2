import React from 'react'
import styled from 'styled-components'

import { toggleDebugRef, getActiveTab, testTabRef } from 'scripts'
import { On, Wrench } from 'icons'
import { Color } from 'theme'
import { EventBus, Events } from 'event'
import { RefModel } from 'models'

import UrlConfig from './urlconfig/UrlConfig'

import * as styles from './styles.mod.scss'

export default function Url({ modelIn, editSet, editListener, saveListener, deleteListener }) {
  const [model, setModel] = React.useState(modelIn)
  const [ref, setRef] = React.useState(null)
  const [active, setActive] = React.useState(false)
  const [editMode, setEditMode] = React.useState(false)

  React.useEffect(() => {
    if (!modelIn.validate()) {
      setEditMode(true)
    }

    getActiveTab(tabId => {
      testTabRef(tabId, (status, version, ref) => {
        setRef(new RefModel(ref))
      })
    })
  }, [])

  React.useEffect(() => {
    setActive(ref && ref.getOn() && model.containsRef(ref.toRef()))
  }, [ref])

  React.useEffect(() => {
    EventBus.on(Events.REF_CHANGED, handleRefChange)
    return () => EventBus.remove(Events.REF_CHANGED, handleRefChange)
  })

  const handleRefChange = React.useCallback((data) => {
    setRef(new RefModel(data.detail.ref))
  })

  React.useEffect(() => {
    EventBus.on(Events.EDIT_MODE_CHANGED, handleEditModeChange)
    return () => EventBus.remove(Events.EDIT_MODE_CHANGED, handleEditModeChange)
  })

  const handleEditModeChange = React.useCallback((data) => {
    setEditMode(data.detail.editSet.has(model.getId()))
  })

  function toggleEditMode() {
    editListener(model)
  }

  function onEdit(name, url, port, wsUrl, wsPort) {
    let newModel = model.clone()
      .setName(name)
      .setUrl(url)
      .setPort(port)
      .setWebSocketUrl(wsUrl)
      .setWebSocketPort(wsPort)

    setModel(newModel)
  }

  function onSave() {
    saveListener(model)
  }

  function onDelete() {
    deleteListener(model)
  }

  function toggleDebugRefMode() {
    toggleDebugRef(new RefModel(model.toJson()).toRef())
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.status}>
          {active ? <On color={Color.GREEN.getColor()} size='20px' /> : null}
        </div>
        <div className={styles.title} onClick={toggleDebugRefMode}>
          <div className={styles.name}>{getName(model)}</div>
          {buildDetail(model.getUrl(), model.getPort(), ref)}
          {buildDetail(model.getWebSocketUrl(), model.getWebSocketPort(), ref)}
        </div>
        {!editMode && <Wrench title='Edit config' size="20px" onClick={toggleEditMode} />}
      </div>
      {editMode && (
        <UrlConfig
          model={model}
          onEdit={onEdit}
          onSave={onSave}
          onDelete={onDelete}
        />
      )}
    </div>
  )
}

function getName(model) {
  return model.getName() || 'Name'
}

const StyledDetail = styled.div(
  ({ color, size }) => `
    color: ${color || 'var(--surface-on)'};
  `,
)

function buildDetail(url, port, ref) {
  if (url && port) {
    return <div className={styles.detail}>
      <StyledDetail color={ref && ref.containsValue(url) ? Color.GREEN.getColor() : null}>{url}</StyledDetail>
      <div>:</div>
      <StyledDetail color={ref && ref.containsValue(url) ? Color.GREEN.getColor() : null}>{port}</StyledDetail>
    </div>
  }

  return null
}
