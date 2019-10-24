//请求数据
export default {
  get: (url,options) => {
    return fetch(url,options||{})
      .then(response => {
        return response.json()
      })
      .then(result => {
        return result
      })
  },
  post: (url,options) => {
    options=options||{}
    return fetch(url,{
      method:'POST',
      ...options
    })
      .then(response => response.json())
      .then(result => {
        return result
      })
  }
}
