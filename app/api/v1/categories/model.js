const mongoose = require('mongoose')
let categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            minLength: (3, 'Must be 3 characters long'),
            maxLength: (225, 'Must be 225 characters long'),
            required: true,
        }
    },
    { timestamp: true }
)

module.exports = mongoose.model("Category", categorySchema)