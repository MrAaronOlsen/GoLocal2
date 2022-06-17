export default class StorageNamespace {
  static CHROME_STORAGE = new StorageNamespace('GOLOCAL2_STORAGE')
  #name

  constructor(name) {
    this.#name = name
  }

  getName() {
    return this.#name
  }
}
