import { DebugStateStorage } from 'storage'
const debugStateStorage = new DebugStateStorage()

export default function testDebugState(tabId, callback) {
  debugStateStorage.getState(tabId, (state) => {
    if (state && state.getUrlId()) {
      callback('LIVE')
    } else {
      chrome.scripting
        .executeScript({
          target: { tabId: tabId },
          world: 'MAIN',
          func: () => window.hasOwnProperty('nwtServerDebugRef'),
        })
        .then(
          (frames) => {
            let result = frames && frames[0].result
            callback(result ? 'READY' : 'DISABLED')
          },
          (error) => {
            // Swollow the error. This is likely due to the page rejecting injected code,
            // which means we cant do anything no matter what
            callback('DISABLED')
          },
        )
    }
  })
}
