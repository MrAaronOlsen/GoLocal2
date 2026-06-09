export default class Events {
  static THEME_CHANGED = new Events('THEME_CHANGED')
  static ADD_URL = new Events('ADD_URL')
  static EDIT_MODE_CHANGED = new Events('EDIT_MODE_CHANGED')
  static REF_CHANGED = new Events('REF_CHANGED', true)

  #name
  #background

  constructor(name, background = false) {
    this.#name = name
    this.#background = background
  }

  getName() {
    return this.#name
  }

  isBackground() {
    return this.#background
  }
}
