import Model from './Model'

const THEME = 'theme'

export default class ConfigModel extends Model {
  constructor(payload) {
    super(payload)
  }

  setTheme(theme) {
    this.set(THEME, theme)
    return this
  }

  getTheme() {
    return this.get(THEME)
  }

  clone() {
    return new ConfigModel(this.toJson())
  }
}
