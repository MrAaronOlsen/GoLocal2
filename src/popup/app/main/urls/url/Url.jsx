import React from 'react'
import styled from 'styled-components'

import { toggleDebugRef, getActiveTab, testTabRef } from 'scripts'
import { On, Wrench } from 'icons'
import { Color } from 'theme'
import { EventBus, Events } from 'event'
import { TabRefStorage } from 'storage'
import { RefModel } from 'models'

import UrlConfig from './urlconfig/UrlConfig'

import * as styles from './styles.mod.scss'

const tabRefStorage = new TabRefStorage()

export default function Url({ modelIn }) {
  const [model, setModel] = React.useState(modelIn)
  const [edit, setEdit] = React.useState(false)
  const [ref, setRef] = React.useState(null)
  const [active, setActive] = React.useState(false)

  React.useEffect(() => {
    if (!modelIn.validate()) {
      setEdit(true)
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
    EventBus.dispatch(Events.EDIT_MODE_CHANGED, {
      editMode: edit
    })
  }, [edit])

  function toggleEdit() {
    setEdit(!edit)
  }

  function onFormChange(name, url, port, ws, wsPort) {
    let newModel = model.clone()
      .setName(name)
      .setUrl(url)
      .setPort(port)
      .setWebSocketUrl(ws)
      .setWebSocketPort(wsPort)

    setModel(newModel)
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
        {!edit && <Wrench title='Edit config' size="20px" onClick={toggleEdit} />}
      </div>
      {edit && (
        <UrlConfig
          model={model}
          onFormChange={onFormChange}
          onSave={toggleEdit}
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
