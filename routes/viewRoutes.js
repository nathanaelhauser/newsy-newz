module.exports = app => {

  app.get('/', (req, res) => {
    res.render('index')
  })

  app.get('/Saved', (req, res) => {
    res.render('Saved')
  })

}