import { ICON_READY, ICON_LIVE, ICON_DISABLED } from './icons'
import { CheckDebugIsPresentMessage, DebugStatusMessage } from 'messages'

// Event fired when a tab is opened
//
chrome.tabs.onCreated.addListener((tab) => {
  console.log('[Event] Tab Created')
  checkDebugIsPresent(tab.id)
})

// Event fired when tab focus changes
//
chrome.tabs.onActivated.addListener((tab) => {
  console.log('[Event] Tab Activated')
  checkDebugIsPresent(tab.tabId)
})

// Event fired when url changes
//
chrome.tabs.onUpdated.addListener((id, change, tab) => {
  console.log('[Event] Tab Updated')
  checkDebugIsPresent(id)
})

// Initializes a chain of messages to discover if the tab (tabId) is valid for debug
//
// - Check Debug Present: background -> content
// - Debug is Present: window script -> content
// - Debug is Present: content -> background
//
function checkDebugIsPresent(tabId) {
  setIcon(ICON_DISABLED)
  CheckDebugIsPresentMessage.sendMessageToTab(tabId)
}

// Listener for "Debug Is Present" message sent from the content script
//
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (DebugStatusMessage.accepts(request)) {
    let status = request.status

    status ? setIcon(ICON_READY) : setIcon(ICON_DISABLED)
  }
})

// Set the Extension Icon
//
function setIcon(path) {
  chrome.action.setIcon(path)
}
