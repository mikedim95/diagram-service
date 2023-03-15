const { check } = require('express-validator/check').check;
exports.userSignupValidator = (req, res, next) => {
    req.check('name', 'Name is required').notEmpty();
    req.check('email', 'Email must be between 3 to 32 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min: 4,
            max: 32
        });
    req.check('password', 'Password is required').notEmpty();
    req.check('password')
        .isLength({ min: 6 })
        .withMessage('Password must contain at least 6 characters')
        .matches(/\d/)
        .withMessage('Password must contain a number');
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};


exports.parcelDimensionValidator = (req, res, next) => {
    req.check('weight', 'Weight must be less than 20KG')
        .notEmpty()
        .custom((value) => {
            if (value > "20") {
                throw new Error('Please enter a value equal or less than 20')
            }
            return true
        })
    req.check('length', 'Please enter a value').notEmpty()
    req.check('width', 'Please enter a value').notEmpty()
    req.check('height', 'Please enter a value').notEmpty()

    req.check('length', 'Please enter a value lower than 123cm')
        .custom((value) => {
            if (value > 123) {
                throw new Error('Please enter a value lower than 123cm')
            }
            return true
        })
        req.check('width', 'Please enter a value lower than 98cm')
        .custom((value) => {
            if (value > 98) {
                throw new Error('Please enter a value lower than 98cm')
            }
            return true
        })
        req.check('height', 'Please enter a value lower than 74cm')
        .custom((value) => {
            if (value > 74) {
                throw new Error('Please enter a value lower than 74cm')
            }
            return true
        })


    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};