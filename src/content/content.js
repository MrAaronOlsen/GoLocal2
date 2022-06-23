import { ScriptPaths } from 'scripts'
import { CheckDebugIsPresentMessage, DebugStatusMessage } from 'messages'

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   let script = document.createElement('script')
//   script.type = 'text/javascript'

//   let code
//   let go_local = message.go_local

//   if (go_local === false) {
//     code = 'window.nwtServerDebugRef.off();'
//     console.log('[GO LOCAL]: Switching off debug mode')
//   } else if (go_local === true) {
//     let port = message.port
//     let url = message.url

//     code = `window.nwtServerDebugRef.on('${port}', '${url}');`
//     console.log(`[GO LIVE] Switching on debug mode. Port=${port}, URL=${url}`)
//   } else {
//     return
//   }

//   script
//     .appendChild(document.createTextNode(code))(
//       document.head || document.documentElement,
//     )
//     .appendChild(script)
//   script.remove()
// })

// Listener for "Check Debug Present" message, sent from background
//
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (CheckDebugIsPresentMessage.accepts(message)) {
    checkDebugIsPresent()
  }
})

// Checks if current content is debug compatible
//
function checkDebugIsPresent() {
  let script = document.createElement('script')
  script.src = chrome.runtime.getURL(
    ScriptPaths.CHECK_DEBUG_IS_PRESENT_SCRIPT_PATH.runtime,
  )

  script.onload = function () {
    this.remove()
  }

  let element = document.head || document.documentElement
  element && element.appendChild(script)
}

// Register an event listener for this content window to handle any Debug Is Present messages
//
window.addEventListener('message', handleWindowMessageEvent, false)

function handleWindowMessageEvent(message) {
  let request = message.data || {}

  console.log('Handling message')
  console.log(request)

  if (DebugStatusMessage.accepts(request)) {
    let status = request.status

    DebugStatusMessage.sendToBackground(status)
  }
}
