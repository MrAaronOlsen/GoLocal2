import Model from './Model'

const NAME = 'name'
const URL = 'url'
const PORT = 'port'
const WS = 'ws'
const WS_PORT = 'wsport'
const AUTH = 'auth'
const AUTH_PORT = 'authport'

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

  setWebSocket(ws) {
    this.set(WS, ws)
    return this
  }

  getWebSocket() {
    return this.get(WS)
  }

  setWebSocketPort(wsPort) {
    this.set(WS_PORT, wsPort)
    return this
  }

  getWebSocketPort() {
    return this.get(WS_PORT)
  }

  setAuth(url) {
    this.set(AUTH, url)
    return this
  }

  getAuth() {
    return this.get(AUTH)
  }

  setAuthPort(port) {
    this.set(AUTH_PORT, port)
    return this
  }

  getAuthPort() {
    return this.get(AUTH_PORT)
  }

  clone() {
    return new UrlModel(this.toJson())
  }

  validate() {
    return this.getName() && this.getUrl() && this.getPort()
  }
}
