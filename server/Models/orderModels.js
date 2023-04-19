const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer_id: String,
    product_id: String,
    quantity: Number
});

module.exports = mongoose.model('Order', orderSchema);