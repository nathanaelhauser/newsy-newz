module.exports = (model, Schema) => {

  const Article = new Schema({
    title: {
      type: String,
      required: true 
    },
    summary: String,
    category: String,
    date: String,
    picture: String,
    url: String,
    notes: [{ type: Schema.Types.ObjectId, ref: 'Note'}]
  })


  return model('Article', Article)
}