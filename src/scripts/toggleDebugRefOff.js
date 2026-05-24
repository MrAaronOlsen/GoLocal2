import getTabCompatibility from './getTabCompatibility'

export default function toggleDebugRefOff(tabId, callback) {

  getTabCompatibility(tabId, result => {
    if (!result) {
      callback(false)
    } else {
      chrome.scripting
        .executeScript({
          target: { tabId: tabId },
          world: 'MAIN',
          func: () => {
            window.nwtServerDebugRef.off()
          },
        })
        .then(frames => callback(true))
        .catch(error => {
          console.error('[Go Local] ' + error)
          callback(false)
        },
        )
    }
  })
}