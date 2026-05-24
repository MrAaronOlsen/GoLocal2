export default class Container {
  #payload

  constructor(payload) {
    this.#payload = payload || {}
  }

  set(name, object) {
    this.#payload[name] = object
  }

  get(name) {
    return this.#payload[name]
  }

  remove(name) {
    Reflect.deleteProperty(this.#payload, name)
  }

  getAll() {
    return Object.values(this.#payload)
  }

  toJson() {
    return this.#payload
  }
}
