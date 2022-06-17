import ChromeStorage from './ChromeStorage'

export default class Storage {
  static #handler = ChromeStorage

  static setContainer(id, container, callback) {
    this.#handler.setContainer(id, container, callback)
  }

  static getContainer(id, callback) {
    this.#handler.getContainer(id, callback)
  }

  static clear() {
    this.#handler.clear()
  }
}
