import axios from 'axios'

const DEFAULT_POST_OPTS = { headers: { 'Content-Type': 'multipart/form-data' } }

export function get (path, opts = {}) {
  return new Promise(function (resolve, reject) {
    axios.get(path, opts)
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}

export function post (path, data, opts = {}) {
  opts = Object.assign({}, DEFAULT_POST_OPTS, opts)
  return new Promise(function (resolve, reject) {
    axios.post(path, data, opts)
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
