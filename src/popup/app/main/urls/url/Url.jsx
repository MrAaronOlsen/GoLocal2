import React from 'react'

import { EventBus, Events } from 'event'
import { On, Wrench } from 'icons'
import { RefModel, UrlModel } from 'models'
import { useLiveRef } from 'ref'
import { turnRefOn, turnRefOff } from 'scripts'
import { Color } from 'theme'

import UrlConfig from './urlconfig/UrlConfig'

import * as styles from './styles.mod.scss'

export default function Url({ modelIn, editListener, saveListener, deleteListener }) {
  const [model, setModel] = React.useState(modelIn)
  const [editMode, setEditMode] = React.useState(false)

  const ref = useLiveRef()
  const isOn = ref ? new RefModel(ref).matches(model) : false

  React.useEffect(() => {
    if (!modelIn.validate()) {
      setEditMode(true)
    }
  }, [])

  React.useEffect(() => {
    const handleEditModeChange = (data) => {
      setEditMode(data.detail.editSet.has(model.getId()))
    }

    EventBus.on(Events.EDIT_MODE_CHANGED, handleEditModeChange)
    return () => EventBus.remove(Events.EDIT_MODE_CHANGED, handleEditModeChange)
  }, [])

  function toggleEditMode() {
    editListener(model)
  }

  function onEdit(name, netProto, netDomain, netPort, wsProto, wsDomain, wsPort) {
    let newModel = model.clone()
      .setName(name)
      .setNetProtocall(netProto)
      .setNetDomain(netDomain)
      .setNetPort(netPort)
      .setWSProtocall(wsProto)
      .setWSDomain(wsDomain)
      .setWSPort(wsPort)

    setModel(newModel)
  }

  function onSave() {
    saveListener(model)
  }

  function onDelete() {
    deleteListener(model)
  }

  function setRefMode() {
    if (isOn) {
      turnRefOff()
    } else {
      turnRefOn(RefModel.fromUrlModel(model)
        .setOn(true)
        .toRef())
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header} title={isOn ? 'Turn ref off' : 'Turn ref on'}>
        <On size='20px' color={isOn ? Color.GREEN.getColor() : null} />
        <div className={styles.title} onClick={setRefMode}>
          <div className={styles.name}>{getName(model)}</div>
          {buildDetail(model.getNetProtocall(), model.getNetDomain(), model.getNetPort())}
          {buildDetail(model.getWSProtocall(), model.getWSDomain(), model.getWSPort())}
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

function buildDetail(proto, domain, port) {
  if (proto && domain && port) {
    return <div className={styles.detail}>
      <div>{proto}</div><div>{domain}</div><div>:</div><div>{port}</div>
    </div>
  }

  return null
}
