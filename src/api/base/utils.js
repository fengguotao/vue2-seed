export function createGETParams (params) {
  return {
    params: params
  }
}

export function createPOSTParams (params) {
  let formData = new FormData()
  Object.keys(params).forEach(key => {
    let value = params[ key ]
    if (typeof params[ key ] !== 'string') {
      value = JSON.stringify(params[ key ])
    }
    formData.append(key, value)
  })
  return formData
}
