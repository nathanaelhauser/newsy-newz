const { model, Schema } = require('mongoose')

module.exports = {
  Article: require('./Article')(module, Schema),
  Note: require('./Note')(module, Schema)
}