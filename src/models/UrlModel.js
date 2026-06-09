import Model from './Model'

const NAME = 'name'
const NET_PROTO = 'net_proto'
const NET_DOMAIN = 'net_domain'
const NET_PORT = 'net_port'
const WS_PROTO = 'ws_proto'
const WS_DOMAIN = 'ws_domain'
const WS_PORT = 'ws_port'

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

  setNetProtocall(v) {
    this.set(NET_PROTO, v)
    return this
  }

  getNetProtocall() {
    return this.get(NET_PROTO)
  }

  setNetDomain(v) {
    this.set(NET_DOMAIN, v)
    return this
  }

  getNetDomain() {
    return this.get(NET_DOMAIN)
  }

  setNetPort(v) {
    this.set(NET_PORT, v)
    return this
  }

  getNetPort() {
    return this.get(NET_PORT)
  }

  setWSProtocall(v) {
    this.set(WS_PROTO, v)
    return this
  }

  getWSProtocall() {
    return this.get(WS_PROTO)
  }

  setWSDomain(v) {
    this.set(WS_DOMAIN, v)
    return this
  }

  getWSDomain() {
    return this.get(WS_DOMAIN)
  }

  setWSPort(v) {
    this.set(WS_PORT, v)
    return this
  }

  getWSPort() {
    return this.get(WS_PORT)
  }

  clone() {
    return new UrlModel(this.toJson())
  }

  validate() {
    return this.getName() && 
    this.getNetProtocall() && this.getNetDomain() && this.getNetPort() &&
    this.getWSProtocall() && this.getWSDomain() && this.getWSPort()
  }
}
