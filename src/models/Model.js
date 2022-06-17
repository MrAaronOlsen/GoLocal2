import short from 'short-uuid'

const ID = 'id'

export default class Model {
  #payload

  constructor(payload) {
    this.#payload = payload ? { ...payload } : {}
  }

  getId() {
    let id = this.get(ID)

    if (id) {
      return id
    } else {
      this.set(ID, short.generate())
      return this.get(ID)
    }
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
