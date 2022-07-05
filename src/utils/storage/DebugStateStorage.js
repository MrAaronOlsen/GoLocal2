import ChromeStorage from './ChromeStorage'
import Storage from './Storage'

import { getActiveTab } from 'scripts'
import { DebugStateModel } from 'models'

const ID = 'DEBUG_STATE_STORAGE'

export default class DebugStateStorage extends Storage {
  constructor() {
    super(ChromeStorage.session(), ID)
  }

  setState(tabId, state, callback) {
    if (!(state instanceof DebugStateModel)) {
      throw 'State must be of type DebugStateModel'
    }

    this.getContainer((container) => {
      container.set(tabId, state.toJson())

      this.setContainer(container, (persisted) => {
        callback && callback(new DebugStateModel(persisted.get(tabId)))
      })
    })
  }

  getState(tabId, callback) {
    this.getContainer((container) => {
      let state = container.get(tabId)
      callback(state ? new DebugStateModel(state) : null)
    })
  }

  getAll(callback) {
    this.getContainer((container) => {
      callback(container.getAll().map((json) => new DebugStateModel(json)))
    })
  }

  removeState(tabId, callback) {
    getContainer((container) => {
      delete container[tabId]
      callback()
    })
  }

  getStateForActiveTab(callback) {
    getActiveTab((tabId) =>
      this.getState(tabId, (state) => {
        if (!state) {
          this.setState(tabId, new DebugStateModel(), (newState) => {
            callback(newState, tabId)
          })
        } else {
          callback(state, tabId)
        }
      }),
    )
  }
}
