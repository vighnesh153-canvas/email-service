module.exports = (req, res, next) => {
    res.status(400).json({
        message: 'Invalid Route'
    });
};
