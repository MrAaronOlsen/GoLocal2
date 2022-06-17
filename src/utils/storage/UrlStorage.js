import Storage from './Storage'
import { UrlModel } from 'models'

export default class UrlStorage {
  static ID = 'URL_STORAGE'

  static setUrl(url, callback) {
    if (!(url instanceof UrlModel)) {
      throw 'Url must be URL Model'
    }

    UrlStorage.getContainer((container) => {
      container.set(url.getName(), url)
      callback || callback()
    })
  }

  static getUrl(name, callback) {
    UrlStorage.getContainer((container) => {
      callback(container.get(name))
    })
  }

  static getAll(callback) {
    UrlStorage.getContainer((container) => {
      callback(container.getAll())
    })
  }

  static getContainer(callback) {
    Storage.getContainer(UrlStorage.ID, callback)
  }
}
