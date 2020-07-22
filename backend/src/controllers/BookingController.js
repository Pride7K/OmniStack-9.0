const { store } = require("./SessionController");
const booking = require("../models/Booking");
module.exports = {
    async store(req, resp) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body

        const book = await booking.create(
            {
                user: user_id,
                spot: spot_id,
                date,
            })

        await book.populate("spot").populate("user").execPopulate();

        return resp.json(book)
    }
}