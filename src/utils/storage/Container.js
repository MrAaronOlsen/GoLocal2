export default class Container {
  #container = {}

  set(name, object) {
    this.#container[name] = object
  }

  get(name) {
    return this.#container[name]
  }

  getAll() {
    return Object.values(this.#container)
  }
}
