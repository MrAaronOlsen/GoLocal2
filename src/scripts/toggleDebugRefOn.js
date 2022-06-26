export default function toggleDebugRefOn(tabId, urlModel, callback) {
  const url = urlModel.getUrl()
  const port = urlModel.getPort()

  chrome.scripting
    .executeScript({
      target: { tabId: tabId },
      world: 'MAIN',
      func: (port, url) => {
        console.log(`Setting Debug Mode. Url: ${url}, Port: ${port}`)
        console.log(window)

        if (window.hasOwnProperty('nwtServerDebugRef')) {
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
        console.log(error)
        callback(false)
      },
    )
}
