import Model from './Model'

const NAME = 'name'
const URL = 'url'
const PORT = 'port'

export default class UrlModel extends Model {
  constructor(payload) {
    super(payload)
  }

  setName(name) {
    this.set(NAME, name)
    return this
  }

  getName() {
    return this.get(NAME)
  }

  setUrl(url) {
    this.set(URL, url)
    return this
  }

  getUrl() {
    return this.get(URL)
  }

  setPort(port) {
    this.set(PORT, port)
    return this
  }

  getPort() {
    return this.get(PORT)
  }
}
