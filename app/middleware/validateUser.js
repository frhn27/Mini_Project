const {check, validationResult} =require('express-validator');

const rules =[
    check('name')
        .notEmpty().withMessage("name is required")
        .isString({min:3 , max : 50}).withMessage("must be a letter")
        .trim()
        .escape(),
    check('email')
        .notEmpty().withMessage("email is required")
        .isEmail({min :10}).withMessage("email nya salah give @example.com")
        .trim()
        .escape(),
    check('password')
        .notEmpty().withMessage("password is required")
        .isLength({min :6}).withMessage("password must be at least 6 characters")
        .trim()
        .escape(),
    check('address')
        .notEmpty().withMessage("address is required")
        .trim()
        .escape(),
    check('phone_number')
        .notEmpty().withMessage("phone_number is required")
        .isMobilePhone('id-ID').withMessage("phone_number must be a  +62 dont give  space or -")
        .trim()
        .escape(),
    ]

const validateUser=[
    //rules
    rules,

    //respone
    (req ,  res , next) => {
     const error=validationResult(req)
            if (!error.isEmpty()){
                return res.status(404).json({error: error.array()})
            }
            next()
        }
    ]

module.exports=validateUser
