import SetIcon from './SetIcon'
import toggleDebugRefOn from './toggleDebugRefOn'
import toggleDebugRefOff from './toggleDebugRefOff'

import { DebugStateStorage } from 'storage'

const debugStateStorage = new DebugStateStorage()

export default function toggle(model, callback) {
  debugStateStorage.getStateForActiveTab((state, tabId) => {
    let activeUrlId = state.getUrlId()

    if (activeUrlId && activeUrlId === model.getId()) {
      toggleDebugRefOff(tabId, (result) => {
        if (result) {
          state.setUrlId(null)

          debugStateStorage.setState(tabId, state, (newState) => {
            if (newState.getUrlId() == null) {
              callback(null)
              SetIcon.setReady(tabId)
            }
          })
        }
      })
    } else {
      toggleDebugRefOn(tabId, model, (result) => {
        if (result) {
          state.setUrlId(model.getId())

          debugStateStorage.setState(tabId, state, (newState) => {
            let stateId = newState.getUrlId()

            if (stateId == model.getId()) {
              callback(stateId)
              SetIcon.setLive(tabId)
            }
          })
        }
      })
    }
  })
}
