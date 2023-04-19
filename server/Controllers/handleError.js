exports.handerError = (err, res) => {
    res.status(400).send(err);
}