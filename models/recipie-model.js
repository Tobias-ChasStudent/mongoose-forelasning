require('dotenv').config
const mongoose = require('mongoose')

const recipieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: false
    },
    ingredients: {
        type: [{
            quantity: String,
            ingredient: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Ingredient"
            }
        }],
        required: true
    }
})

module.exports = mongoose.model("Recipie", recipieSchema)