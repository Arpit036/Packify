const mongoose = require('mongoose')
const dbgr = require("debug")("development:mongoose");
const config = require("config")


mongoose
    .connect(`${config.get("MONGODB_URI")}/packify`)
    .then(function(){
    dbgr("connected");
})
.catch(function(err){
    console.log("error");
})  

module.exports = mongoose.connection;

