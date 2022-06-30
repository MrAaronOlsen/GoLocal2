export default class Events {
  static THEME_CHANGED = new Events('THEME_CHANGED')

  #name

  constructor(name) {
    this.#name = name
  }

  getName() {
    return this.#name
  }
}
