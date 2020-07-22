const express = require("express");
const routes = require("./routes")
const mongoose = require("mongoose");
const cors = require("cors");
const server = express();
const path = require("path");


mongoose.connect("URL DO MONGO ATLAS AQUI",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

server.use(cors({origin:"http://localhost:3001"}))
server.use(express.json());
server.use('/files',express.static(path.resolve(__dirname,"..","uploads")))
server.use(routes)

server.listen(3000,()=>{console.log("Rodando na porta " + 3000)})