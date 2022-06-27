import ChromeStorage from './ChromeStorage'
import Storage from './Storage'

import { UrlModel } from 'models'

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
      callback(new UrlModle(container.get(id)))
    })
  }

  getAll(callback) {
    this.getContainer((container) => {
      callback(container.getAll().map((json) => new UrlModel(json)))
    })
  }
}
