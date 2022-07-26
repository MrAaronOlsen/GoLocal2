const paths = {
  LIVE: {
    128: 'assets/live/cloud_128.png',
  },
  READY: {
    128: 'assets/ready/cloud_128.png',
  },
  DISABLED: {
    128: 'assets/disabled/cloud_128.png',
  },
}

export default class SetIcon {
  static setReady(tabId, callback) {
    this.#setIcon(tabId, 'READY', callback)
  }

  static setLive(tabId, callback) {
    this.#setIcon(tabId, 'LIVE', callback)
  }

  static setDisabled(tabId, callback) {
    this.#setIcon(tabId, 'DISABLED', callback)
  }

  static #setIcon(tabId, type, callback) {
    if (!callback) {
      callback = () => {}
    }

    chrome.action.setIcon(
      {
        path: paths[type],
        tabId: tabId,
      },
      callback,
    )
  }
}
