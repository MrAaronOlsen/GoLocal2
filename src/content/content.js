import { CHECK_DEBUG_PRESENT_SCRIPT } from 'scripts'
import { CHECK_DEBUG_PRESENT, DEBUG_IS_PRESENT } from 'messages'

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

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!CHECK_DEBUG_PRESENT.receive(message)) {
    return
  }

  console.log(`${CHECK_DEBUG_PRESENT.name} message received in content`)

  window.addEventListener(
    'message',
    (event) => {
      console.log(`${DEBUG_IS_PRESENT.name} message received in content`)

      let request = event.data || {}

      if (DEBUG_IS_PRESENT.receive(request)) {
        console.log(`Content sending message ${DEBUG_IS_PRESENT.name}`)
        chrome.runtime.sendMessage(DEBUG_IS_PRESENT.send(request))
      }
    },
    false,
  )

  let script = document.createElement('script')
  script.src = chrome.runtime.getURL(CHECK_DEBUG_PRESENT_SCRIPT)

  script.onload = function () {
    this.remove()
  }

  let element = document.head || document.documentElement
  element && element.appendChild(script)
})
