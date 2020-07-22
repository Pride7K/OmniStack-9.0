const mongoose = require("mongoose");


const book = new mongoose.Schema({
    date:String,
    approved: Boolean,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    },
    spot:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Spot"
    }
})


module.exports = mongoose.model("Booking",book);