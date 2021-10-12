const express = require('express');
const app = express();

const postsRoute = require('./routes');
const Seller = require('./models/seller');


app.get('/', (req, res) => {
    res.json({test : 'Hello'});
});

app.get('/', postsRoute);

app.post('/register-seller', async(req, res) => {
    const {
        name,
        email,
        password,
        address
    } = req.body;

    const payload = req.payload;
    console.log(payload);
    const seller = new Seller({
        name,
        email,
        password,
        address
    });
    
    const result = await seller.save();
    return res.send(result)
});

app.listen(3000, () =>{
    console.log('Sever is running')
});