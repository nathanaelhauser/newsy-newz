module.exports = app => {
  require('./viewRoutes')(app)
  require('./articleRoutes')(app)
  require('./noteRoutes')(app)
}