export default function toggleDebugRefOn(tabId, url, callback) {
  chrome.scripting
    .executeScript({
      target: { tabId: tabId },
      world: 'MAIN',
      func: (port, url) => {
        if (window.hasOwnProperty('nwtServerDebugRef')) {
          window.nwtServerDebugRef.on(port, url)
          return true
        }

        return false
      },
      args: [url.port, url.url],
    })
    .then(
      (frames) => {
        callback(frames && frames[0].result)
      },
      (error) => {
        callback(false)
      },
    )
}
