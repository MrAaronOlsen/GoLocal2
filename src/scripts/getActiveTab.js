export default function get(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let tabId = tabs[0].id

    callback(tabId)
  })
}
