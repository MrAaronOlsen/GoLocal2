var current_tab

// Handles when GoLocal icon is left clicked
chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    let tabId = tabs[0].id
    current_tab = 'go_local_tab_' + tabId.toString()

    chrome.storage.local.get(current_tab.toString(), (result) => {
      if (result[current_tab] === true) {
        chrome.tabs.sendMessage(tabId, { go_local: false })

        result[current_tab] = false
        chrome.storage.local.set(result, () => {
          removeBadge()
        })
      } else {
        get_checked_config(function (port, url) {
          chrome.tabs.sendMessage(tabId, {
            go_local: true,
            port: port,
            url: url,
          })

          result[current_tab] = true
          chrome.storage.local.set(result, () => {
            setBadge()
          })
        })
      }
    })
  })
})

// Handles when the active tab changes
chrome.tabs.onActivated.addListener((tab) => {
  let tabId = tab.tabId
  current_tab = 'go_local_tab_' + tabId.toString()

  chrome.tabs.get(tabId, (tab) => {
    let allowedUrl = 'https://apps.nextworld.net'

    if (!tab.url.startsWith(allowedUrl)) {
      invalidBadge()
    } else {
      setMode(tabId, current_tab)
    }
  })
})

// Handles when the URL changes
chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
  current_tab = 'go_local_tab_' + tabId.toString()

  if (info.status == 'loading' && info.url === undefined) {
    chrome.tabs.sendMessage(tabId, { go_local: false })
    let storage = {}
    storage[current_tab] = false

    chrome.storage.local.set(storage, () => {
      removeBadge()
    })
  }
})

// Functions
function get_checked_config(callback) {
  chrome.storage.sync.get('config', (result) => {
    if (
      result === null ||
      result.config === null ||
      Object.keys(result.config).length === 0
    ) {
      callback('8084', 'http://localhost')
    } else {
      for (const config of Object.entries(result.config)) {
        if (config[1].checked == 'checked') {
          callback(config[1].port, config[1].url)

          return
        }
      }

      // Nothing is checked. So use default
      callback('8084', 'http://localhost')
    }
  })
}

function setMode(tabId, current_tab) {
  chrome.storage.local.get(current_tab, (result) => {
    if (result[current_tab] === true) {
      get_checked_config(function (port, url) {
        chrome.tabs.sendMessage(tabId, { go_local: true, port: port, url: url })

        result[current_tab] = true
        chrome.storage.local.set(result, () => {
          setBadge()
        })
      })
    } else {
      result[current_tab] = false
      chrome.tabs.sendMessage(tabId, { go_local: false })
      chrome.storage.local.set(result, () => {
        removeBadge()
      })
    }
  })
}

function setBadge() {
  chrome.browserAction.setIcon({
    path: {
      16: 'assets/local/go_local_on_16.png',
      19: 'assets/local/go_local_on_19.png',
      24: 'assets/local/go_local_on_24.png',
      48: 'assets/local/go_local_on_48.png',
    },
  })
}

function removeBadge() {
  chrome.browserAction.setIcon({
    path: {
      16: 'assets/cloud/go_local_cloud_16.png',
      19: 'assets/cloud/go_local_cloud_19.png',
      24: 'assets/cloud/go_local_cloud_24.png',
      48: 'assets/cloud/go_local_cloud_48.png',
    },
  })
}

function invalidBadge() {
  chrome.browserAction.setIcon({
    path: {
      16: 'assets/invalid/go_local_invalid_16.png',
      19: 'assets/invalid/go_local_invalid_19.png',
      24: 'assets/invalid/go_local_invalid_24.png',
      48: 'assets/invalid/go_local_invalid_48.png',
    },
  })
}
