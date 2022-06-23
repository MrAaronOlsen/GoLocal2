import { ScriptPaths } from 'scripts'

export const CHECK_PAGE_MESSAGE = 'check_debug_is_present'
export const REPORT_PAGE_STATUS_WINDOW = 'report_page_status_window'
export const REPORT_PAGE_STATUS_RUNTIME = 'report_page_status_runtime'

export default class IsPageCompatable {
  static handleRuntimeMessage(message, callback) {
    if (!message) {
      return
    }

    if (message.name === CHECK_PAGE_MESSAGE) {
      IsPageCompatable.loadCheckStatusScript()
    }

    if (message.name === REPORT_PAGE_STATUS_WINDOW) {
      let status = message.status || false
      IsPageCompatable.sendReportPageStatusMessage_Runtime(status)
    }

    if (message.name === REPORT_PAGE_STATUS_RUNTIME) {
      let status = message.status || false

      callback && callback(status)
    }
  }

  static loadCheckStatusScript() {
    let script = document.createElement('script')
    script.src = chrome.runtime.getURL(
      ScriptPaths.REPORT_PAGE_STATUS_SCRIPT_URL.runtime,
    )

    script.onload = function () {
      this.remove()
    }

    let element = document.head || document.documentElement
    element && element.appendChild(script)
  }

  //
  // Message Broadcasts
  //

  // Sends message to the content script of the passed in tab to check if the loaded page is compatible with extension
  //
  static sendCheckPageStatusMessage(tabId, callback) {
    post(`Sending Status Request To Tab. Tab: ${tabId}`)

    chrome.tabs.sendMessage(tabId, {
      name: CHECK_PAGE_MESSAGE,
    })

    callback()
  }

  // Sends a runtime message reporting the status passed in
  //
  static sendReportPageStatusMessage_Runtime(status) {
    post(`Sending Status Report To Runtime. Status: ${status}`)

    chrome.runtime.sendMessage({
      name: REPORT_PAGE_STATUS_RUNTIME,
      status: status,
    })
  }

  // Sends a window message reporting the status passed in
  //
  static sendReportPageStatusMessage_Window(status) {
    post(`Sending Status Report To Window. Status: ${status}`)

    window.postMessage(
      {
        name: REPORT_PAGE_STATUS_WINDOW,
        status: status,
      },
      '*',
    )
  }
}

function post(message) {
  console.log('[PAGE STATUS] ' + message)
}
