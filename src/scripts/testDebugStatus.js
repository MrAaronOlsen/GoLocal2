import { DebugStateStorage } from 'storage'
import getTabCompatibility from './getTabCompatibility'

const debugStateStorage = new DebugStateStorage()

export default function testDebugStatus(tabId, callback) {
  getTabCompatibility(tabId, result => {
    if (!result) {
      callback('DISABLED', result)
    } else {
      
      if (result.version === 'V2') {
        let status = result.ref.on ? 'LIVE' : 'READY'
        callback(status, result)
      } else {
        debugStateStorage.getState(tabId, state => {
          let status = state && state.getUrlId() === tabId ? 'LIVE' : 'READY'
          callback(status, result)
        })
      }
    }
  })
}

