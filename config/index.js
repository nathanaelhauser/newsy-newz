const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/news_db"

mongoose.connect(MONGODB_URI)

module.exports = mongoose.connection