import React from 'react'

import { EventBus, Events } from 'event'
import { RefModel } from 'models'
import { getActiveTab, testTabRef } from 'scripts'

import * as styles from './styles.mod.scss'
import GoLocal from 'assets/live/bar_icon_128.png'

export default function Header({ }) {
  const [ref, setRef] = React.useState(null)

  React.useEffect(() => {
    getActiveTab(tabId => {
      testTabRef(tabId, (status, version, ref) => {
        setRef(ref)
      })
    })
  }, [])

  React.useEffect(() => {
    EventBus.on(Events.REF_CHANGED, handleRefChange)
    return () => EventBus.remove(Events.REF_CHANGED, handleRefChange)
  })

  const handleRefChange = React.useCallback((data) => {
    let ref = data.detail.ref
    setRef(ref)
  })

  return (
    <div className={styles.container}>
      <img src={GoLocal} width="30px" height="30px" className={styles.icon} />
      <div className={styles.title}>GoLocal</div>
      {buildRefPreview()}
    </div>
  )

  function buildRefPreview() {
    if (ref && ref.on) {
      let refModel = new RefModel(ref)
      let url = refModel.getUrlComplete()
      let ws = refModel.getWebSocketComplete()

      return (<div className={styles.refpreview}>
        {url && <div className={styles.refpart}>{url}</div>}
        {ws && <div className={styles.refpart}>{ws}</div>}
      </div>)
    }

    return null
  }
}
