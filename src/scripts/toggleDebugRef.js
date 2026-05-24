
import toggleDebugRefOn from './toggleDebugRefOn'
import toggleDebugRefOff from './toggleDebugRefOff'
import getActiveTab from './getActiveTab'
import testDebugStatus from './testDebugStatus'

import { DebugStateStorage } from 'storage'
import { DebugStateModel } from 'models'

const debugStateStorage = new DebugStateStorage()

export default function toggleDebugRef(model, callback) {

  getActiveTab(tabId => {
    testDebugStatus(tabId, (status, result) => {
      switch (status) {
        case ('DISABLED'): {
          // NoOp
          break
        }
        case ('READY'): {
          // If ready, turn on.
          toggleDebugRefOn(tabId, model, (result) => {
            if (result) {
              let state = new DebugStateModel().setUrlId(model.getId())

              debugStateStorage.setState(tabId, state, (newState) => {
                callback(newState.getUrlId())
              })
            }
          })

          break
        }
        case ('LIVE'): {
          // If already on, turn off.

          toggleDebugRefOff(tabId, (result) => {
            if (result) {
              debugStateStorage.removeState(tabId, () => {
                callback(null)
              })
            }
          })

          break
        }
      }
    })
  })
}
