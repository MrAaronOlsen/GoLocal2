export default class Events {
  static THEME_CHANGED = new Events('THEME_CHANGED')
  static ADD_URL = new Events('ADD_URL')
  static DELETE_URL = new Events('DELETE_URL')
  static EDIT_MODE_CHANGED = new Events('EDIT_MODE_CHANGED')
  static REF_CHANGED = new Events('REF_CHANGED')

  #name

  constructor(name) {
    this.#name = name
  }

  getName() {
    return this.#name
  }
}
