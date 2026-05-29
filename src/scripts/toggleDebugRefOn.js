import getTabVersion from './getTabVersion'

export default function toggleDebugRefOn(tabId, ref, callback) {
  ref['on'] = true

  getTabVersion(tabId, (version, currentRef) => {
    if (version) {
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
    } else {
      callback(false)
    }
  })
}

function toggle(version, ref) {

  if (version === 'V2') {
    window.nwtServerDebugRef.set(null)
    window.nwtServerDebugRef.set(ref)
  } else {
    window.nwtServerDebugRef.on(ref.port, ref.url)
  }
}
