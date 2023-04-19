const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    password: String,
    phone: { type: String, unique: true }
});

module.exports = mongoose.model('Customer', customerSchema);