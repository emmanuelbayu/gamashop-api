const mongoose = require("mongoose");
require('dotenv/config')

const dbConnect = () => {
return mongoose
.connect(process.env.MONGO_URI,{useNewUrlParser : true, useUnifiedTopology : true})
.then((res) => console.log("Connected to database successfully"))
.catch((err) => console.log(err));
};

module.exports = dbConnect;