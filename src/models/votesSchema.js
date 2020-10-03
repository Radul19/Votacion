const { Schema, model } = require('mongoose')

const VotesSchema = new Schema({
  Yes:{type:Number,required:true},
  No:{type:Number,required:true}
})

module.exports = model('Votes', VotesSchema)