
export default function getTabVersion(tabId, callback) {
  
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    world: 'MAIN',
    func: checkDebugRef
  })
    .then(frames => {
      let result = frames && frames[0].result

      if (result) {
        callback(result.version, result.ref)
      } else {
        callback(null, null)
      }
      
    })
    .catch(error => {
      callback(null, null)
    })
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