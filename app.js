const express = require('express');
const jwt = require('jsonwebtoken')
const Seller = require('./models/seller');
const loginSeller = require('./routes/loginSeller');
const registerSeller = require('./routes/registerSeller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({test : 'Hello'});
});

app.post('/register-seller', registerSeller)
app.post('/login-seller', loginSeller)

app.listen(process.env.API_PORT, () =>{
    console.log('Sever is running');
});