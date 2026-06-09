export default function get(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let tab = tabs[0]

    if (!tab) {
      return
    }

    callback(tab.id)
  })
}
