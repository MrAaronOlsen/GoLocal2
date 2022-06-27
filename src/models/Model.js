import shortUUID from 'short-uuid'

const ID = 'id'

export default class Model {
  #payload

  constructor(payload) {
    this.#payload = payload ? { ...payload } : {}
  }

  getId() {
    return this.get(ID)
  }

  generateId() {
    this.set(ID, shortUUID.generate())
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
