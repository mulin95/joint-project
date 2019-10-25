//请求数据
export default {
  get: (url,options) => {
    return fetch(url,options||{})
      .then(response => {
        return response.text()
      })
      .then(result => {
        if(result===''){
          return false
        }else{
          return JSON.parse(result)
        }
        
      })
  },
  post: (url,options) => {
    options=options||{}
    if(typeof options.body ==='object'){
      options.body=JSON.stringify(options.body)
    }
    if(typeof options.data ==='object'){
      options.body=JSON.stringify(options.data)
    }
    return fetch(url,{
      method:'POST',
      ...options
    })
      .then(response => response.json())
      .then(result => {
        return result
      })
  },
  delete : (url,options) => {
    return fetch(url,{
      method:'DELETE',
      ...options
    })
    .then(response => response.json())
    .then(result => {
      return result
    })
  }
}
