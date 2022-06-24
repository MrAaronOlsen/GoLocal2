export default function isTabCompatible(tabId, callback) {
  chrome.scripting
    .executeScript({
      target: { tabId: tabId },
      world: 'MAIN',
      func: () => window.hasOwnProperty('nwtServerDebugRef'),
    })
    .then(
      (frames) => {
        let result = frames && frames[0].result
        callback(result)
      },
      (error) => {
        // Swollow the error. This is likely due to the page rejecting injected code,
        // which means we cant do anything no matter what
        callback(false)
      },
    )
}
