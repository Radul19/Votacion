  
const { Schema, model } = require('mongoose')

const FamilySchema = new Schema({
  Familia:{type:String},
  Grado:{type:String},
  Voto:{type:Boolean}
})

module.exports = model('Family', FamilySchema)