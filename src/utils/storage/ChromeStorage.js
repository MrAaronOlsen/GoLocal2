const NAMESPACE = 'GOLOCAL_2_STORAGE'

export default class ChromeStorage {
  #type

  constructor(type) {
    this.#type = type
  }

  static sync() {
    return new ChromeStorage('sync')
  }

  static session() {
    return new ChromeStorage('session')
  }

  setContainer(id, container, callback) {
    this.getStorage((storage) => {
      storage[id] = container

      this.setStorage(storage, () => {
        this.getContainer(id, callback)
      })
    })
  }

  getContainer(id, callback) {
    this.getStorage((storage) => {
      let container = storage[id]
      callback(container)
    })
  }

  // Storage
  //

  getStorage(callback) {
    chrome.storage[this.#type].get(NAMESPACE, (store) => {
      let storage = store[NAMESPACE]

      if (!storage) {
        this.setStorage({}, () => {
          this.getStorage(callback)
        })
      } else {
        callback && callback(storage)
      }
    })
  }

  setStorage(storage, callback) {
    let store = {}
    store[NAMESPACE] = storage

    chrome.storage[this.#type].set(store, callback)
  }

  clear() {
    chrome.storage[this.#type].clear(() => {
      this.getStorage()
    })
  }
}
