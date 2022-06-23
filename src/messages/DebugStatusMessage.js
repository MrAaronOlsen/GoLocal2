const NAME = 'debug_status'

export default class DebugStatusMessage {
  static accepts(message) {
    console.log('DebugStatusMessage checking message')
    console.log(message)

    return message && message.name === NAME
  }

  static sendToBackground(status) {
    chrome.runtime.sendMessage({
      name: NAME,
      status: status,
    })
  }

  static sendToWindow(status) {
    window.postMessage(
      {
        name: 'debug_status',
        status: status,
      },
      '*',
    )
  }
}
