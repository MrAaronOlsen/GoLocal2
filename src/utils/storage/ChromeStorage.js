import StorageNamespace from './StorageNameSpace'

const NAMESPACE = StorageNamespace.CHROME_STORAGE.getName()

export default class ChromeStorage {
  static setContainer(id, container, callback) {
    ChromeStorage.getStorage((storage) => {
      console.log('Setting container in CHROME Storage ' + id + ':')
      console.log(container)

      storage[id] = container

      ChromeStorage.setStorage(storage, () => {
        ChromeStorage.getContainer(id, callback)
      })
    })
  }

  static getContainer(id, callback) {
    ChromeStorage.getStorage((storage) => {
      let container = storage[id]

      console.log('Getting Container from CHROME Storage ' + id + ':')
      console.log(container)

      callback(container)
    })
  }

  // Storage
  //

  static getStorage(callback) {
    chrome.storage.sync.get(NAMESPACE, (store) => {
      console.log('Getting CHROME Storage:')
      console.log(store)

      let storage = store[NAMESPACE]

      if (!storage) {
        ChromeStorage.setStorage({}, () => {
          ChromeStorage.getStorage(callback)
        })
      } else {
        callback && callback(storage)
      }
    })
  }

  static setStorage(storage, callback) {
    let store = {}
    store[NAMESPACE] = storage

    chrome.storage.sync.set(store, callback)
  }

  static clear() {
    console.log('Clearing CHROME Storage')
    chrome.storage.sync.clear(() => {
      ChromeStorage.getStorage()
    })
  }
}
