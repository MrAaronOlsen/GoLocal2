import ChromeStorage from './ChromeStorage'
import Storage from './Storage'

import { getActiveTab } from 'scripts'

const ID = 'DEBUG_STATE_STORAGE'

export default class TabRefStorage extends Storage {
  constructor() {
    super(ChromeStorage.session(), ID)
  }

  setRef(tabId, ref, callback) {
    this.getContainer((container) => {
      container.set(tabId, ref)

      this.setContainer(container, (persisted) => {
        callback && callback(persisted.get(tabId))
      })
    })
  }

  getRef(tabId, callback) {
    this.getContainer((container) => {
      let ref = container.get(tabId)
      callback(ref)
    })
  }

  removeRef(tabId, callback) {
    try {
      this.getContainer((container) => {
        container.remove(tabId)

        this.setContainer(container, (persisted) => {
          callback && callback()
        })
      })
    } catch (error) {
      console.error(error)
    }

  }

  getRefForActiveTab(callback) {
    getActiveTab((tabId) =>
      this.getRef(tabId, (ref) => {
        callback(ref, tabId)
      }),
    )
  }
}
