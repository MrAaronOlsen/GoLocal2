import IsPageCompatable from './IsPageCompatable'

setTimeout(function () {
  let status = window.hasOwnProperty('nwtServerDebugRef')
  IsPageCompatable.sendReportPageStatusMessage_Window(status)
}, 100)
