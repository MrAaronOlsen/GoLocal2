const eventBus = {
  on(event, callback) {
    document.addEventListener(event.getName(), callback)
  },
  dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event.getName(), { detail: data }))

    if (event.isBackground()) {
      chrome.runtime
        .sendMessage({ name: event.getName(), detail: data })
        .catch(() => {})
    }
  },
  remove(event, callback) {
    document.removeEventListener(event.getName(), callback)
  },
  onBackground(event, callback) {

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      let messageEvent = message.name

      if (event.getName() === messageEvent) {
        callback(message)
      }
    })
  }
}

export default eventBus
