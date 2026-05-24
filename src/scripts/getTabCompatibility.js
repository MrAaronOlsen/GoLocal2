
export default function getTabCompatibility(tabId, callback) {
  
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    world: 'MAIN',
    func: checkDebugRef
  })
    .then(frames => callback(frames && frames[0].result))
    .catch(error => callback(null))
}

function checkDebugRef() {
  if (window.hasOwnProperty('nwtServerDebugRef')) {

    if (window.nwtServerDebugRef.hasOwnProperty("set")) {
      let ref = window.nwtServerDebugRef.get()
      return { version: 'V2', ref: ref }
    }

    return { version: 'V1' }
  } else {
    return null
  }
}