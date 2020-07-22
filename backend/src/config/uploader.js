const multer = require("multer")
const path = require("path")
module.exports = 
{
    storage:multer.diskStorage({
        destination: path.resolve(__dirname,'..','..',"uploads"),
        filename: (req,file,cb)=>{
            // extname é uma função que pega o formato do arquivo através do nome inteiro

            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname,ext);

            cb(null,`${name}-${Date.now()}${ext}`)
        }
    })
}