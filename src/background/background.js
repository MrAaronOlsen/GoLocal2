import { isTabCompatible, SetIcon } from 'scripts'

// Event fired when a tab is opened
//
chrome.tabs.onCreated.addListener((tab) => {
  console.log(`[Event] Tab Created: ${tab.id}`)
  handleTabEvent(tab.id)
})

// Event fired when tab focus changes
//
chrome.tabs.onActivated.addListener((tab) => {
  console.log(`[Event] Tab Activated: ${tab.tabId}`)
  handleTabEvent(tab.tabId)
})

// Event fired when page changes
//
chrome.tabs.onUpdated.addListener((id, change, tab) => {
  if (change.status === 'complete') {
    console.log(`[Event] Tab Updated: ${id}`)
    console.log(change)
    handleTabEvent(id)
  }
})

function handleTabEvent(tabId) {
  isTabCompatible(tabId, (status) => {
    status ? SetIcon.setReady(tabId) : SetIcon.setDisabled(tabId)
  })
}

// Listener for all runtime messages
//
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {})
