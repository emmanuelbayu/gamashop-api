const mongoose = require('mongoose');
const schema = mongoose.schema;

const sellerSchema = new schema({
    role : 'seller',
    name : string,
    email : string,
    password : string,
    address : string
})

const seller = mongoose.model('seller', sellerSchema, 'seller')
module.exports = seller