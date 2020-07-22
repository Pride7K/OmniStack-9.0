const mongoose = require("mongoose");


const SpotSchema = mongoose.Schema(
    {
        thumbnail: String,
        company:String,
        price: Number,
        techs: [String],
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "Usuario"
        }
    },{
        toJSON:{
            virtuals:true,
        }
    });
SpotSchema.virtual("thumbnail_url").get(function(){
    return `http://localhost:3000/files/${this.thumbnail}`
})


module.exports = mongoose.model("Spot",SpotSchema)