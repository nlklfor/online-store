import {validationResult} from "express-validator";
import bcrypt from "bcrypt";
import UserModel from "../models/User.js";
import jwt from "jsonwebtoken";

export const registration = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            email: req.body.email,
            passwordHash: hash,
            fullName: req.body.fullName,
            avatarUrl: req.body.avatarUrl,
        })

        const user = await doc.save()
        const token = jwt.sign({
            _id: user._id
        }, '#1234', {expiresIn: "30d"})

        res.json({
            user,
            token
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Registration was failed"
        })
    }
}

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email})
        if (!user) {
            return res.status(404).json({
                message: "Incorrect login or password"
            })
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);
        if (!isValidPass) {
            return res.status(400).json({
                message: "Incorrect login or password"
            })
        }

        const token = jwt.sign({
            _id: user._id
        }, '#1234', {expiresIn: "30d"})


        res.json({
            user,
            token
        })

    } catch (err) {
        return res.status(500).json({
            message: "Failed to login"
        })
    }
}

export const authMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);

        if (!user) {
            res.status(404).json({
                message: "User was not found"
            })
        }
        res.json({
            user
        })
    } catch (err) {
        res.status(500).json({
            success: false
        })
    }
}