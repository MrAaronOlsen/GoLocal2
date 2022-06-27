export default function toggleDebugRefOn(tabId, urlModel, callback) {
  const url = urlModel.getUrl()
  const port = urlModel.getPort()

  chrome.scripting
    .executeScript({
      target: { tabId: tabId },
      world: 'MAIN',
      func: (port, url) => {
        if (window.hasOwnProperty('nwtServerDebugRef')) {
          console.log(
            `[Go Local] Setting Debug Mode. Url: ${url}, Port: ${port}`,
          )

          window.nwtServerDebugRef.on(port, url)
          return true
        }

        return false
      },
      args: [port, url],
    })
    .then(
      (frames) => {
        callback(frames && frames[0].result)
      },
      (error) => {
        console.log('[Go Local] Debug On Error')
        console.log(error)

        // Swollow the error. This is likely due to the page rejecting injected code,
        // which means we cant do anything
        callback(false)
      },
    )
}
