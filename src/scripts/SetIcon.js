const paths = {
  LIVE: {
    32: 'assets/live/cloud_32.png',
  },
  READY: {
    32: 'assets/ready/cloud_32.png',
  },
  DISABLED: {
    32: 'assets/disabled/cloud_32.png',
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
