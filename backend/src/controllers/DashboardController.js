const Spots = require("../models/Spot");
const User = require("../models/Usuario");

module.exports = {
    async show(req,resp){
        const {user_id} = req.headers

        const spots = await Spots.find({user: user_id})

        return resp.json(spots)

    }
}