export default class Model {
  #payload

  constructor(payload) {
    this.#payload = payload ? { ...payload } : {}
  }

  get(field) {
    return this.#payload[field]
  }

  set(field, value) {
    this.#payload[field] = value
  }

  toJson() {
    return this.#payload
  }
}
