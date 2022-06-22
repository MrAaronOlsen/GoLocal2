import { ICON_READY, ICON_LIVE, ICON_DISABLED } from './icons'
import { CHECK_DEBUG_PRESENT, DEBUG_IS_PRESENT } from 'messages'

// Handles when the active tab changes
//
chrome.tabs.onActivated.addListener((tab) => {
  console.log(`Tab In Focus. Sending ${CHECK_DEBUG_PRESENT.name} message`)
  chrome.tabs.sendMessage(tab.tabId, CHECK_DEBUG_PRESENT.send())
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (DEBUG_IS_PRESENT.receive(request)) {
    console.log(`${DEBUG_IS_PRESENT.name} message received`)

    let present = DEBUG_IS_PRESENT.test(request)

    console.log(`${DEBUG_IS_PRESENT.name} is ${present}`)

    present ? setIcon(ICON_READY) : setIcon(ICON_DISABLED)
  }
})

function setIcon(path) {
  chrome.action.setIcon(path)
}
