import Storage from './Storage'
import { UrlModel } from 'models'
import Container from './Container'

const ID = 'URL_STORAGE'

export default class UrlStorage {
  static setUrl(url, callback) {
    if (!(url instanceof UrlModel)) {
      throw 'Url must be URL Model'
    }

    UrlStorage.getContainer((container) => {
      container.set(url.getId(), url.toJson())

      UrlStorage.setContainer(container, (persisted) => {
        callback && callback(persisted)
      })
    })
  }

  static getUrl(id, callback) {
    UrlStorage.getContainer((container) => {
      callback(new UrlModle(container.get(id)))
    })
  }

  static getAll(callback) {
    UrlStorage.getContainer((container) => {
      callback(container.getAll().map((json) => new UrlModel(json)))
    })
  }

  static newUrl(callback) {
    UrlStorage.getContainer((container) => {
      let newUrl = new UrlModel()
      container.set(newUrl.getId(), newUrl.toJson())

      UrlStorage.setContainer(container, (persisted) => {
        callback(persisted.getAll())
      })
    })
  }

  static getContainer(callback) {
    Storage.getContainer(ID, (container) => {
      callback(new Container(container))
    })
  }

  static setContainer(container, callback) {
    Storage.setContainer(ID, container.toJson(), callback)
  }

  static clear() {
    Storage.clear()
  }
}
