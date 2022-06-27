import { testDebugState, SetIcon } from 'scripts'

// Event fired when a tab is opened
//
chrome.tabs.onCreated.addListener((tab) => {
  handleTabEvent(tab.id)
})

// Event fired when tab focus changes
//
chrome.tabs.onActivated.addListener((tab) => {
  handleTabEvent(tab.tabId)
})

// Event fired when page changes
//
chrome.tabs.onUpdated.addListener((id, change, tab) => {
  if (change.status === 'complete') {
    handleTabEvent(id)
  }
})

function handleTabEvent(tabId) {
  testDebugState(tabId, (state) => {
    switch (state) {
      case 'READY':
        SetIcon.setReady(tabId)
        break
      case 'LIVE':
        SetIcon.setLive(tabId)
        break
      default:
        SetIcon.setDisabled(tabId)
    }
  })
}

// Listener for all runtime messages
//
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {})
