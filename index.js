import express from 'express';
import mongoose from "mongoose";
import {loginValidation, registerValidation} from "./validations/validations.js";
import checkAuth from "./utils/checkAuth.js";
import {ItemController, UserController} from './controllers/index.js';
import cors from "cors";

mongoose.connect('mongodb+srv://nikifor:njs0vnpnUD5TzE2y@cluster0.c3vkhh7.mongodb.net/store')
    .then(() => console.log("DB is connected successfully"))
    .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is working...');
});

/// REGISTRATION & AUTHORIZATION REQUESTS ///
app.post('/auth/login', loginValidation, UserController.login);
app.post('/auth/register', registerValidation, UserController.registration);
app.get('/auth/me', checkAuth, UserController.authMe);

/// ITEM REQUESTS ///
app.get('/items', ItemController.getAllItems);
app.get('/items/:id', ItemController.getOneItem);

/// CART REQUESTS ///
app.post('/user/cart', (req, res) => {
    const {item} = req.body;
    res.status(201).send(item);
});

app.delete('/user/cart/:id', (req, res) => {
    const {id} = req.params;
    res.status(200).send({id});
});

/// WISHLIST REQUESTS ///
app.post('/user/wishlist', (req, res) => {
    const {item} = req.body;
    res.status(201).send(item);
});

app.delete('/user/wishlist/:id', (req, res) => {
    const {id} = req.params;
    res.status(200).send({id});
});

/// CHECKOUT REQUESTS ///
app.post('/checkout', (req, res) => {
    const {items} = req.body;
    res.status(200).send(items);
});

app.listen(3333, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Server is Working Fine");
});
