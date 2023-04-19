const Order = require('../Models/orderModels');
const Product = require('../Models/productModels');
const { handleError } = require('./handleError');

exports.create = async(req, res) => {
    try {
        const { customer_id, product_id, quantity } = req.body;

        await Order.create({
            customer_id,
            product_id,
            quantity
        });

        await Product.updateOne({ _id: product_id }, {
            $inc: { quantity: -quantity }
        })

        res.status(204).send({ message: 'success' });
    } catch (err) { 
        handleError(err, res);
    }
}