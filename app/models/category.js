const mongoose = require('mongoose')
const Schema = mongoose.Schema
const categorySchema = new Schema({
    name: {
        type: string,
        required: true
    }
})


const Category= mongoose.model('Category', categorySchema)

mongoose.modelNames.exports = Category