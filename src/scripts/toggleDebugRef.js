
import { EventBus, Events } from 'event'
import toggleDebugRefOn from './toggleDebugRefOn'
import toggleDebugRefOff from './toggleDebugRefOff'
import getActiveTab from './getActiveTab'
import testTabRef from './testTabRef'

import { TabRefStorage } from 'storage'

const tabRefStorage = new TabRefStorage()

export default function toggleDebugRef(ref) {
  getActiveTab(tabId => {
    testTabRef(tabId, (status, version, currentRef) => {

      switch (status) {
        case ('DISABLED'): {
          dispatchRefChange(tabId, null)
          break
        }
        case ('READY'): {
          // If ready, turn on.
          toggleDebugRefOn(tabId, ref, (result) => {
            if (result) {

              if (version === 'V2') {
                dispatchRefChange(tabId, ref)
              } else {
                tabRefStorage.setRef(tabId, ref, (newState) => {
                  dispatchRefChange(tabId, ref)
                })
              }
            }
          })

          break
        }
        case ('LIVE'): {
          // If already on, turn off.
          toggleDebugRefOff(tabId, (result) => {
            if (result) {
              if (version === 'V2') {
                dispatchRefChange(tabId, null)
              } else {
                tabRefStorage.removeRef(tabId, () => {
                  dispatchRefChange(tabId, null)
                })
              }
            }
          })

          break
        }
      }
    })
  })
}

function dispatchRefChange(tabId, ref) {
  EventBus.dispatch(Events.REF_CHANGED, {
    tabId: tabId,
    ref: ref
  })
}
