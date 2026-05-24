import getTabCompatibility from './getTabCompatibility'
import { UrlModel } from 'models'

export default function toggleDebugRefOn(tabId, urlModel, callback) {
  getTabCompatibility(tabId, result => {
    if (!result) {
      callback(false)
    } else {

      const version = result.version
      const url = urlModel.getUrl()
      const port = urlModel.getPort()
      const wsUrl = urlModel.getWebSocket()
      const wsPort = urlModel.getWebSocketPort()
      const authUrl = urlModel.getAuth()
      const authPort = urlModel.getAuthPort()

      let ref = {
        on: true
      }

      if (url && port) {
        ref['url'] = url
        ref['port'] = port
      }

      if (wsUrl && wsPort) {
        ref['wsUrl'] = wsUrl
        ref['wsPort'] = wsPort
      }

      if (authUrl && authPort) {
        ref['authUrl'] = auth + ":" + authPort
      }

      chrome.scripting
        .executeScript({
          target: { tabId: tabId },
          world: 'MAIN',
          func: toggle,
          args: [version, ref],
        })
        .then(frames => callback(true))
        .catch(error => {
          console.error('[Go Local] ' + error)
          callback(false)
        })
    }
  })
}

function toggle(version, ref) {

  if (version === 'V2') {
    window.nwtServerDebugRef.set(ref)
  } else {
    window.nwtServerDebugRef.on(ref.port, ref.url)
  }
}
