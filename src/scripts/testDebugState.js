import { DebugStateStorage } from 'storage'
const debugStateStorage = new DebugStateStorage()

export default function testDebugState(tabId, callback) {
  isWindowCompatible(tabId).then(
    (frames) => {
      let compatible = frames && frames[0].result

      if (compatible) {
        isWindowLive(tabId, (isLive) => {
          callback(isLive ? 'LIVE' : 'READY')
        })
      } else {
        callback('DISABLED')
      }
    },
    (error) => {
      // Swollow the error. This is likely due to the page rejecting injected code,
      // which means we cant do anything no matter what
      callback('DISABLED')
    },
  )
}

function isWindowCompatible(tabId) {
  return chrome.scripting.executeScript({
    target: { tabId: tabId },
    world: 'MAIN',
    func: () => window.hasOwnProperty('nwtServerDebugRef'),
  })
}

function isWindowLive(tabId, callback) {
  debugStateStorage.getState(tabId, (state) => {
    callback(state && state.getUrlId())
  })
}
