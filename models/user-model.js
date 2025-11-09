const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Packify")

const userSchema =mongoose.Schema({
    fullname: {
      type  :String,
      minlength:3,
      trim : true
    },
    email: String,
    password: String,
    cart: {
        type: Array,
        default :[]
    },
    isadmin: Boolean,
    orders: {
        type: Araay,
        default: []
    },
    contact: Number,
    pictures: String,
});

module.exports= mongoose.model("user", userSchema)