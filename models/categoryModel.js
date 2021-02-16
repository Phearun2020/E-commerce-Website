const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    trimestamps: true
})

module.exports = mongoose.model("Category", categorySchema)