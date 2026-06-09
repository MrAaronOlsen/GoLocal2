import { TabRefStorage } from 'storage'

import getTabVersion from './getTabVersion'

const tabRefStorage = new TabRefStorage()

export default function testTabRef(tabId, callback) {
  getTabVersion(tabId, (version, ref) => {
    if (!version) {
      callback('DISABLED', null, null)
    } else if (version === 'V2') {
      let status = ref && ref.on ? 'LIVE' : 'READY'
      callback(status, version, ref)
    } else {
      tabRefStorage.getRef(tabId, ref => {
        let status = ref ? 'LIVE' : 'READY'
        callback(status, version, ref)
      })
    }
  })
}

