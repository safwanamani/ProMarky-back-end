const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    proId: {
        type: Number,
        unique: true,
        required: true
    },
    productName: String,
    quantity: Number,
    date: String,
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }
});

module.exports = mongoose.model("Product", productSchema);