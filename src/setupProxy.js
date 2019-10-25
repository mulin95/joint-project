const proxy=require('http-proxy-middleware')

module.exports = function(app) {

  app.use('/user', proxy({
    target: 'http://localhost:9011',
    changeOrigin: true,
  }))

  app.use('/note', proxy({
    target: 'http://localhost:9012',
    changeOrigin: true,
  }))

  app.use('/huileme', proxy({
    target: 'http://101.200.54.176:8080',
    changeOrigin: true,
  }))
  app.use('/huilme', proxy({
    target: 'http://101.200.54.176:8080',
    changeOrigin: true,
  }))
    app.use('/loginpassword1', proxy({
    target: 'http://101.200.54.176:8080',
    changeOrigin: true,
  }))
}