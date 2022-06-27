import Container from './Container'

export default class Storage {
  #storage
  #id

  constructor(storage, id) {
    this.#storage = storage
    this.#id = id
  }

  getContainer(callback) {
    this.#storage.getContainer(this.#id, (container) => {
      callback(new Container(container))
    })
  }

  setContainer(container, callback) {
    this.#storage.setContainer(this.#id, container.toJson(), (container) =>
      callback(new Container(container)),
    )
  }

  clear() {
    this.#storage.clear()
  }
}
