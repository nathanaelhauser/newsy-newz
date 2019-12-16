const { Article } = require('../models')

module.exports = app => {

  // Get all articles
  app.get('/articles', (req, res) => {
    Article.find()
      .then(articles => {
        console.log(articles)
        res.sendStatus(200)
      })
      .catch(e => console.log(e))
  })

  // Get one article
  app.get('/articles/:id', (req, res) => {
    Article.find({ _id: req.params.id })
      .then(article => {
        console.log(article)
        res.sendStatus(200)
      })
      .catch(e => console.log(e))
  })

  // Create one article
  app.post('/articles', (req, res) => {
    Article.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // Update one article
  app.put('/articles/:id', (req, res) => {
    Article.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // Delete one article
  app.delete('/articles/:id', (req, res) => {
    Article.deleteOne({ _id: req.params.id })
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })

}