import getTabVersion from './getTabVersion'

export default function toggleDebugRefOff(tabId, callback) {

  getTabVersion(tabId, (version, ref) => {
    if (!ref) {
      callback(false)
    } else {
      chrome.scripting
        .executeScript({
          target: { tabId: tabId },
          world: 'MAIN',
          func: (version) => {
            if (version === 'V2') {
              window.nwtServerDebugRef.set(null)
            } else {
              window.nwtServerDebugRef.off()
            }
          },
          args: [version]
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