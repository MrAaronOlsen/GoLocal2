import { isTabCompatible } from 'scripts'

// Event fired when a tab is opened
//
chrome.tabs.onCreated.addListener((tab) => {
  console.log(`[Event] Tab Created: ${tab.id}`)
  handleEvent(tab.id)
})

// Event fired when tab focus changes
//
chrome.tabs.onActivated.addListener((tab) => {
  console.log(`[Event] Tab Activated: ${tab.tabId}`)
  handleEvent(tab.tabId)
})

// Event fired when page changes
//
chrome.tabs.onUpdated.addListener((id, change, tab) => {
  if (change.status === 'complete') {
    console.log(`[Event] Tab Updated: ${id}`)
    console.log(change)
    handleEvent(id)
  }
})

function handleEvent(tabId) {
  isTabCompatible(tabId, (status) => {
    status ? setIcon('#49f') : setIcon('#666')
  })
}

// Listener for all runtime messages
//
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {})

// Set the Extension Icon
//
function setIcon(color) {
  chrome.action.setBadgeText({ text: ' ' })
  chrome.action.setBadgeBackgroundColor({ color: color })
}
