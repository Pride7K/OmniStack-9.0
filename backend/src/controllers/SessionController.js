// index,show,update,destroy,store

const Usuario = require("../models/Usuario");


module.exports =
{
    // async e await é para garantir que a aplicação só vai continuar após ter cadastrado o email no banco
    async store(req, resp) {
        const { email } = req.body;

        let usuario = await Usuario.findOne({ email });

        if (!usuario) {
            usuario = await Usuario.create({ email })      
        }


        return resp.json(usuario);

    }
}