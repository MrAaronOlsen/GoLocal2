import { DebugStatusMessage } from 'messages'

setTimeout(function () {
  let status = window.hasOwnProperty('nwtServerDebugRef')
  DebugStatusMessage.sendToWindow(status)
}, 100)
