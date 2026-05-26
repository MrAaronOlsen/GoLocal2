import { EventBus, Events } from 'event'

const LIVE_PATH = 'assets/live/'
const READY_PATH = 'assets/ready/'
const DISABLED_PATH = 'assets/disabled/'

const BAR_ICON_32 = 'bar_icon_32.png'
const BAR_ICON_64 = 'bar_icon_64.png'
const BAR_ICON_128 = 'bar_icon_128.png'

const icons = {
  'V1': {
    LIVE: {
      128: 'bar_icon_32.png',
    },
    READY: {
      128: 'assets/ready/cloud_128.png',
    },
    DISABLED: {
      32: DISABLED_PATH + BAR_ICON_32,
      64: DISABLED_PATH + BAR_ICON_64,
      128: DISABLED_PATH + BAR_ICON_128,
    }
  },
  'V2': {
    LIVE: {
      32: LIVE_PATH + BAR_ICON_32,
      64: LIVE_PATH + BAR_ICON_64,
      128: LIVE_PATH + BAR_ICON_128,
    },
    READY: {
      32: READY_PATH + BAR_ICON_32,
      64: READY_PATH + BAR_ICON_64,
      128: READY_PATH + BAR_ICON_128,
    },
    DISABLED: {
      32: DISABLED_PATH + BAR_ICON_32,
      64: DISABLED_PATH + BAR_ICON_64,
      128: DISABLED_PATH + BAR_ICON_128,
    }
  }
}

export default class SetIcon {
  static setReady(tabId, version) {
    this.#setIcon(tabId, 'READY', version)
  }

  static setLive(tabId, version) {
    this.#setIcon(tabId, 'LIVE', version)
  }

  static setDisabled(tabId) {
    this.#setIcon(tabId, 'DISABLED', 'V2')
  }

  static #setIcon(tabId, type, version) {
    let path = icons[version][type]

    chrome.action.setIcon(
      {
        path: path,
        tabId: tabId,
      }
    )
  }
}
