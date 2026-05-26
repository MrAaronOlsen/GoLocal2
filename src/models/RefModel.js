import Model from './Model'

const ON = 'on'
const URL = 'url'
const PORT = 'port'
const WS_URL = 'wsUrl'
const WS_PORT = 'wsPort'

export default class RefModel extends Model {
    constructor(payload) {
        super(payload)
    }

    setOn(on) {
        this.set(ON, on)
        return this
    }

    getOn() {
        return this.get(ON)
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

    getUrlComplete() {
        if (this.getUrl() && this.getPort()) {
            return this.getUrl() + ":" + this.getPort()
        }

        return null
    }

    getWebSocketComplete() {
        if (this.getWebSocketUrl() && this.getWebSocketPort()) {
            return this.getWebSocketUrl() + ":" + this.getWebSocketPort()
        }

        return null
    }

    toRef() {
        let ref = {}

        ref[URL] = this.getUrl()
        ref[PORT] = this.getPort()
        ref[WS_URL] = this.getWebSocketUrl()
        ref[WS_PORT] = this.getWebSocketPort()

        return ref
    }
}