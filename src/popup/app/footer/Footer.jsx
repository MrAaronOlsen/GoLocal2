import React from 'react'

import { Button } from 'button'
import { EventBus, Events } from 'event'
import { Add, Back, Gear } from 'icons'
import { Config } from 'popup/app/config'

import * as styles from './styles.mod.scss'

export default function Footer({ navigate }) {
  const [editMode, setEditMode] = React.useState(false)

  React.useEffect(() => {
    EventBus.on(Events.EDIT_MODE_CHANGED, updateEditMode)
    return () => EventBus.remove(Events.EDIT_MODE_CHANGED, updateEditMode)
  })

  const updateEditMode = React.useCallback((data) => {
    setEditMode(data.detail.editSet.size > 0) 
  })

  return editMode ? null : (
    <div className={styles.container}>

      {navigate.current() !== 'config' && (
        <Add title='Add Config' size="15px" onClick={() =>
          EventBus.dispatch(Events.ADD_URL, {})
        } />
      )}

      {navigate.size() > 1 && <Back title='Go back' size={"20px"} onClick={navigate.pop} />}

      {navigate.current() !== 'config' && (
        <Gear title='Configure Plugin' size="20px" onClick={() => navigate.add('config', <Config />)} />
      )}
    </div>
  )
}
