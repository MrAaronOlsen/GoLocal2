import ChromeStorage from './ChromeStorage'
import Storage from './Storage'

import { ConfigModel } from 'models'

const ID = 'CONFIG_STORAGE'
const CONFIG = 'CONFIG'

export default class ConfigStorage extends Storage {
  constructor() {
    super(ChromeStorage.sync(), ID)
  }

  setConfig(config, callback) {
    if (!(config instanceof ConfigModel)) {
      throw 'State must be of type ConfigModel'
    }

    this.getContainer((container) => {
      container.set(CONFIG, config.toJson())

      this.setContainer(container, (persisted) => {
        callback && callback(new ConfigModel(persisted.get(CONFIG)))
      })
    })
  }

  getConfig(callback) {
    this.getContainer((container) => {
      let config = container.get(CONFIG)

      callback(config ? new ConfigModel(config) : new ConfigModel())
    })
  }
}
