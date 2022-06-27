export default function toggleDebugRefOff(tabId, callback) {
  chrome.scripting
    .executeScript({
      target: { tabId: tabId },
      world: 'MAIN',
      func: () => {
        if (window.hasOwnProperty('nwtServerDebugRef')) {
          console.log(`[Go Local] Turning off debug mode`)

          window.nwtServerDebugRef.off()
          return true
        }

        return false
      },
    })
    .then(
      (frames) => {
        callback(frames && frames[0].result)
      },
      (error) => {
        console.log('[Go Local] Debug Off Error')
        console.log(error)

        // Swollow the error. This is likely due to the page rejecting injected code,
        // which means we cant do anything
        callback(false)
      },
    )
}

function toggleOff() {}
