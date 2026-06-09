import React from 'react'

import { EventBus, Events } from 'event'
import { getActiveTab, testTabRef } from 'scripts'

const RefContext = React.createContext(null)

export function RefProvider({ children }) {
  const [ref, setRef] = React.useState(null)
  const tabIdRef = React.useRef(null)

  React.useEffect(() => {
    getActiveTab(tabId => {
      tabIdRef.current = tabId

      testTabRef(tabId, (status, version, ref) => {
        setRef(ref)
      })
    })
  }, [])

  React.useEffect(() => {
    const handleRefChange = (data) => {
      if (data.detail.tabId === tabIdRef.current) {
        setRef(data.detail.ref)
      }
    }

    EventBus.on(Events.REF_CHANGED, handleRefChange)
    return () => EventBus.remove(Events.REF_CHANGED, handleRefChange)
  }, [])

  return <RefContext.Provider value={ref}>{children}</RefContext.Provider>
}

export function useLiveRef() {
  return React.useContext(RefContext)
}
