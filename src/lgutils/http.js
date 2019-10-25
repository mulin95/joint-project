//请求数据
export default {
  get: (url, options) => {
    console.log(options)
    console.log(url)
    return fetch(url)
      .then(response => {
        localStorage.setItem("x-access-token",response.headers.get('x-access-token'))
       console.log(response)
        return response
      }
      )
      .then(result => {
        console.log(result)
        return result
      })
  },
  post: (url, options) => {
    options = options || {}
    if (typeof options.body === 'object') {
      options.body = JSON.stringify(options.body)
    }
    if (typeof options.data === 'object') {
      options.body = JSON.stringify(options.data)
    }
    return fetch(url, {
      method: 'POST',
      ...options
    })
      .then(response => {
        localStorage.setItem("x-access-token",response.headers.get('x-access-token'))
        return response.json()
      }
      )
      .then(result => {
        
        return result
      })
  }
}
