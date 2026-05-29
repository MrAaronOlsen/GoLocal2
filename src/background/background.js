import { EventBus, Events } from 'event'
import { updateIcon, getActiveTab } from 'scripts'

// Event fired when a tab is opened
//
chrome.tabs.onCreated.addListener(tab => {
  updateIcon(tab.id)
})

// Event fired when tab focus changes
//
chrome.tabs.onActivated.addListener(tab => {
  updateIcon(tab.tabId)
})

// Event fired when page changes
//
chrome.tabs.onUpdated.addListener((id, change, tab) => {
  if (change.status === 'complete') {
    updateIcon(id)
  }
})

EventBus.onBackground(Events.REF_CHANGED, (data) => {
  let tabId = data.detail.tabId
  updateIcon(tabId)
})
