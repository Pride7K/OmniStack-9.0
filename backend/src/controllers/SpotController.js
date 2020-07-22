const { store } = require("./SessionController");

const Spot = require("../models/Spot");
const Usuario = require("../models/Usuario")

/*
index == retornar listagem
show
update == atualizar um dado
destroy == destruir um dado
store == guardar  um dado
*/
module.exports =
{
    async index(req,resp){
        const {tech} = req.query;

        const spots = await Spot.find({techs:tech})

        return resp.json(spots);

    },
    async store(req, resp) {
        //console.log(req.body);
        //console.log(req.file)
        // req.headers;
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const usuario = await Usuario.findById(user_id);

        if (!usuario) {
            return resp.status(401).json({error: "User does not Exists"});
        }
        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            price,
            techs: techs.split(',').map(tech => tech.trim())

        })

        return resp.json(spot);

    }
}