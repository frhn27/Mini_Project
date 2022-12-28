const {check, validationResult} =require('express-validator')

const rules=[
    check('name')
        .notEmpty().withMessage('name is required')
        .isString({min:3, max:50}).withMessage('name must be a letter')
        .trim()
        .escape(),
    check('quantity')
        .notEmpty().withMessage('quantity is required')
        .isInt({min: 1}).withMessage('product minimum  1 ')
        .trim()
        .escape(),
    check('price')
        .notEmpty().withMessage('price is required')
        .isInt({min:10000}).withMessage('Price minimum 10000')
        .trim()
        .escape(),

    ]

const validateProduct=[rules, (req ,res , next)=>{
        const error=validationResult(req)
        if(!error.isEmpty()) {
            return res.status(402).json({error:error.array()})
        }
        next()
    }]

module.exports = validateProduct