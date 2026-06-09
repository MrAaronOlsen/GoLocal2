import { EventBus, Events } from 'event'
import { TabRefStorage } from 'storage'

import getActiveTab from './getActiveTab'
import toggleDebugRefOff from './toggleDebugRefOff'
import toggleDebugRefOn from './toggleDebugRefOn'

const tabRefStorage = new TabRefStorage()

export function turnRefOn(ref) {
  let liveRef = { ...ref, on: true }

  getActiveTab(tabId => {
    toggleDebugRefOn(tabId, liveRef, (result, version) => {
      if (!result) {
        return
      }

      // V2 pages report their own ref via get(); V1 has no such API, so we
      // remember what was set in TabRefStorage. Either way the ref we hand to
      // the UI must carry on:true so the header preview renders.
      if (version === 'V2') {
        dispatchRefChange(tabId, liveRef)
      } else {
        tabRefStorage.setRef(tabId, liveRef, () => dispatchRefChange(tabId, liveRef))
      }
    })
  })
}

export function turnRefOff() {
  getActiveTab(tabId => {
    toggleDebugRefOff(tabId, (result, version) => {
      if (!result) {
        return
      }

      if (version === 'V2') {
        dispatchRefChange(tabId, null)
      } else {
        tabRefStorage.removeRef(tabId, () => dispatchRefChange(tabId, null))
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
