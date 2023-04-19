const Customer = require('../Models/customerModels');
const { handleError, handerError } = require('./handleError');

exports.signup = async(req, res) => {
    try { 
        const { firstname, lastname, phone, password } = req.body;
        
        await Customer.create({
            firstname,
            lastname,
            phone,
            password
        });

        res.status(201).send({ message: 'success' });
    } catch (err) {
        handerError(err, res);
    }
}

exports.login = async(req, res) => {
    try { 
        const { phone, password } = req.body;
        
        const customer = await Customer.find({ phone: phone, password: password });

        if (customer.length === 0) throw Error('Phone or password is invalid');

        res.status(200).send({
            data: customer
        });
    } catch (err) {
        handerError(err, res);
    }
}

exports.update = async(req, res) => {
    try { 
        const { id } = req.params;
        const { firstname, lastname } = req.body;
        
        const customer = await Customer.findByIdAndUpdate({ _id: id }, {
            firstname,
            lastname
        });

        res.status(204).send({ message: 'success' });
    } catch (err) {
        handerError(err, res);
    }
}

exports.delete = async(req, res) => {
    try { 
        const { id } = req.params;
        
        await Customer.deleteOne({ _id: id });
        res.status(204).send({ message: 'success' });
    } catch (err) {
        handerError(err, res);
    }
}