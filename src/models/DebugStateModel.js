import Model from './Model'

const URL_ID = 'url_id'

export default class DebugStateModel extends Model {
  constructor(payload) {
    super(payload)
  }

  setUrlId(id) {
    this.set(URL_ID, id)
    return this
  }

  getUrlId() {
    return this.get(URL_ID)
  }

  clone() {
    return new DebugStateModel(this.toJson())
  }
}
