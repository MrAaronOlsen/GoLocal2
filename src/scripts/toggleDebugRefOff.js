export default function toggleDebugRefOff(tabId, callback) {
  chrome.scripting
    .executeScript({
      target: { tabId: tabId },
      world: 'MAIN',
      func: () => {
        window.nwtServerDebugRef.off()
      },
    })
    .then(
      (frames) => {
        callback()
      },
      (error) => {
        // Swollow the error. This is likely due to the page rejecting injected code,
        // which means we cant do anything no matter what
        callback()
      },
    )
}

function toggleOff() {}
