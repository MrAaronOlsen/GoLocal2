import Model from './Model'

const NAME = 'name'
const URL = 'url'
const PORT = 'port'
const WS_URL = 'wsUrl'
const WS_PORT = 'wsPort'

export default class UrlModel extends Model {
  constructor(payload) {
    super(payload)
  }

  static withId() {
    let newUrl = new UrlModel()
    newUrl.generateId()

    return newUrl
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

  setWebSocketUrl(ws) {
    this.set(WS_URL, ws)
    return this
  }

  getWebSocketUrl() {
    return this.get(WS_URL)
  }

  setWebSocketPort(wsPort) {
    this.set(WS_PORT, wsPort)
    return this
  }

  getWebSocketPort() {
    return this.get(WS_PORT)
  }

  containsRef(ref) {
    if (!ref) {
      return false
    }

    return Object.entries(ref).some(([key, value]) =>
      this.toJson().hasOwnProperty(key) && this.toJson()[key] === value
    )
  }

  clone() {
    return new UrlModel(this.toJson())
  }

  validate() {
    return this.getName() && this.getUrl() && this.getPort()
  }
}
