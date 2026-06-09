import { Color } from 'theme'

const LIVE_PATH = 'assets/live/'
const READY_PATH = 'assets/ready/'
const DISABLED_PATH = 'assets/disabled/'

const BAR_ICON_32 = 'bar_icon_32.png'
const BAR_ICON_64 = 'bar_icon_64.png'
const BAR_ICON_128 = 'bar_icon_128.png'

const icons = {
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
    let path = icons[type]

    chrome.action.setIcon(
      {
        path: path,
        tabId: tabId,
      }
    )

    if (version === 'V1') {
      this.#setBadge(tabId, 'V1', Color.WHITE.getColor())
    } else if (type === 'LIVE') {
      this.#setBadge(tabId, ' ', Color.GREEN.getColor())
    } else {
      this.#setBadge(tabId, null, Color.WHITE.getColor())
    }
  }

  static #setBadge(tabId, text, color) {
    chrome.action.setBadgeText({ text: text, tabId: tabId });
    chrome.action.setBadgeBackgroundColor({ color: color, tabId: tabId });
  }
}
