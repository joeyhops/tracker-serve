/**
 * Dependencies
 */
const mongoose = require('mongoose')

//Create Mongoose Connection
const connection = mongoose.createConnection(process.env.MONGO_URL)
const Schema = mongoose.Schema

//Define Budget Schema
const budgetSchema = new Schema({
  name: String,
  user: Schema.ObjectId,
  partner: Schema.ObjectId,
  month: Number,
  salary: Number,
  savings: Number,
  saveLimit: Number,
  hardLimit: Number,
  overLimit: Boolean,
  expenses: [Schema.ObjectId]
})

// Define Budget Model
const Budget = connection.model('Budget', budgetSchema)

// Export Model
module.exports = Budget