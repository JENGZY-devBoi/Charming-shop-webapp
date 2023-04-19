const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const customerRoutes = require('./Routes/customer');
const orderRoutes = require('./Routes/order');
const productRoutes = require('./Routes/product');

const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: ['http://localhost:4200'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use('/api/v1/customer', customerRoutes);
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/order', orderRoutes);

module.exports = app;