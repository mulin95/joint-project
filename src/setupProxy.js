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

}