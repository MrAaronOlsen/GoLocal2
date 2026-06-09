import getTabVersion from './getTabVersion'

export default function toggleDebugRefOn(tabId, refIn, callback) {
  let ref = { ...refIn, on: true }

  getTabVersion(tabId, (version) => {
    if (version) {
      chrome.scripting
        .executeScript({
          target: { tabId: tabId },
          world: 'MAIN',
          func: toggle,
          args: [version, ref],
        })
        .then(frames => callback(true, version))
        .catch(error => {
          console.error('[Go Local] ' + error)
          callback(false, version)
        })
    } else {
      callback(false)
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
