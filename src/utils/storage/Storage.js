import ChromeStorage from './ChromeStorage'

export default class Storage {
  static #handler = ChromeStorage

  static setContainer(id, container, callback) {
    if (!(container instanceof Container)) {
      throw 'Object must be a Container'
    }

    this.#handler.setContainer(id, container, callback)
  }

  static getContainer(id, callback) {
    this.#handler.getContainer(id, callback)
  }
}
