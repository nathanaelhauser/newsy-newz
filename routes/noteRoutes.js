const { Note } = require('../models')

module.exports = app => {
  
  // Get all notes
  app.get('/notes', (req, res) => {
    Note.find()
      .then(notes => {
        console.log(notes)
        res.sendStatus(200)
      })
      .catch(e => console.log(e))
  })

  // Get one note
  app.get('/notes/:id', (req, res) => {
    Note.find({ _id: req.params.id })
      .then(note => {
        console.log(note)
        res.sendStatus(200)
      })
      .catch(e => console.log(e))
  })

  // Create one note
  app.post('/notes', (req, res) => {
    Note.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // Update one note
  app.put('/notes/:id', (req, res) => {
    Note.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // Delete one note
  app.delete('/notes/:id', (req, res) => {
    Note.deleteOne({ _id: req.params.id })
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })

}