import Container from './Container'
import StorageNamespace from './StorageNameSpace'

const NAMESPACE = StorageNamespace.CHROME_STORAGE

export default class ChromeStorage {
  static setContainer(id, container, callback) {
    if (!(container instanceof Container)) {
      throw 'Object must be a Container'
    }

    ChromeStorage.getStorage((storage) => {
      console.log(
        'Setting container in CHROME Storage ' + id + ': ' + container,
      )
      storage[id] = container

      callback && callback()
    })
  }

  static getContainer(id, callback) {
    ChromeStorage.getStorage((storage) => {
      let container = storage[id] || new Container()
      console.log(
        'Getting Container from CHROME Storage ' + id + ': ' + container,
      )

      callback(container)
    })
  }

  static getStorage(callback) {
    if (!callback) {
      throw 'No callback parameter'
    }

    chrome.storage.sync.get(NAMESPACE, function (storage) {
      if (!storage) {
        ChromeStorage.initialize(() => {
          ChromeStorage.getStorage(callback)
        })
      } else {
        console.log('Getting CHROME Storage: ' + storage)
        callback(storage)
      }
    })
  }

  static initialize(callback) {
    console.log('Initializing CHROME Storage')
    chrome.storage.sync.set({ NAMESPACE: {} }, callback)
  }
}
