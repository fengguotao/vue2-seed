import * as request from './base/request'
import { createGETParams, createPOSTParams } from './base/utils'

export class DemoApi {
  static get (path, params = {}) {
    return request.get(path, createGETParams(params))
  }

  static post (path, params = {}) {
    return request.post(path, createPOSTParams(params))
  }

  static queryListByName (name) {
    return DemoApi.post('serverURL', { name })
  }
}
