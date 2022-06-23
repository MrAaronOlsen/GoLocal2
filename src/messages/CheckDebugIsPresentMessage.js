const NAME = 'check_debug_is_present'

export default class CheckDebugIsPresentMessage {
  static accepts(message) {
    console.log('CheckDebugIsPresentMessage checking acceptance of message')
    console.log(message)

    return message && message.name === NAME
  }

  static sendMessageToTab(tabId) {
    console.log(`Sending ${NAME} message to tab ${tabId}`)

    chrome.tabs.sendMessage(tabId, {
      name: NAME,
    })
  }
}
