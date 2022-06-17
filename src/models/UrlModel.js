import Model from './Model'

export default class UrlModel extends Model {
  static NAME = 'name'
  static URL = 'url'
  static PORT = 'port'

  constructor(payload) {
    super(payload)
  }

  setName(name) {
    this.set(NAME, name)
    return this
  }

  setUrl(url) {
    this.set(URL, url)
    return this
  }

  setPort(port) {
    this.set(PORT, port)
    return this
  }
}
