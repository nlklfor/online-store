import {body} from "express-validator";

export const loginValidation = [
    body('email', "Not correct type of the email").isEmail(),
    body('password', "Your password should at least 5 symbols").isLength({min: 5}),
]


export const registerValidation = [
    body('email', "Not correct type of the email").isEmail(),
    body('password', "Your password should at least 5 symbols").isLength({min: 5}),
    body('fullName', "Your name is too short").isLength({min: 3}),
    body('avatarUrl', "Your avatar should be a link").optional().isURL()
]