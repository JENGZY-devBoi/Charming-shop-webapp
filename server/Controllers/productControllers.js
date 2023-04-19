const Product = require('../Models/productModels');
const { handleError } = require('./handleError');

exports.getAll = async(req, res) => {
    try {
        const products = await Product.find();

        res.status(200).send({
            data: products
        })
    } catch (err) {
        handleError(err, res);
    }
}

exports.getById = async(req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById({ _id: id });

        res.status(200).send({
            data: product
        });
    } catch (err) {
        handleError(err, res);
    }
}

exports.create = async(req, res) => {
    try {
        const { name, category, price, quantity, image } = req.body;

        await Product.create({
            name,
            category,
            price,
            quantity,
            image
        });

        res.status(201).send({ message: 'success' });
    } catch (err) {
        handleError(err, res);
    }
}

exports.delete = async(req, res) => {
    try {
        const { id } = req.params;

        await Product.deleteOne({ _id: id });

        res.status(204).send({ message: 'success' });
    } catch (err) {
        handleError(err, res);
    }
}