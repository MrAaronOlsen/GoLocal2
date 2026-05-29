import { UrlModel } from 'models'

import ChromeStorage from './ChromeStorage'
import Storage from './Storage'

const ID = 'URL_STORAGE'

export default class UrlStorage extends Storage {
  constructor() {
    super(ChromeStorage.sync(), ID)
  }

  setUrl(url, callback) {
    if (!(url instanceof UrlModel)) {
      throw 'Url must be URL Model'
    }

    this.getContainer((container) => {
      container.set(url.getId(), url.toJson())

      this.setContainer(container, (persisted) => {
        callback && callback(persisted)
      })
    })
  }

  getUrl(id, callback) {
    this.getContainer((container) => {
      callback(new UrlModel(container.get(id)))
    })
  }

  deleteUrl(id, callback) {
    this.getContainer((container) => {
      container.remove(id)

      this.setContainer(container, (persisted) => {
        callback && callback(persisted)
      })
    })
  }

  getAll(callback) {
    this.getContainer((container) => {
      callback(container.getAll().map((json) => new UrlModel(json)))
    })
  }
}
