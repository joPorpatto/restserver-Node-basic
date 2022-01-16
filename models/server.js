const express = require('express')
const cors = require('cors')



class Server {

        constructor(){
                this.app = express();
                this.port = process.env.PORT
                this.usuariosPath = '/api/usuarios';

                this.middlewares();


                this.routes();


        }

        middlewares(){

                this.app.use(cors())

                //parseo y lectura del body
                this.app.use(express.json());

                //directorio publico
                this.app.use(express.static('public'))
        }


        routes(){
                this.app.use(this.usuariosPath, require('../routes/usuarios'))
                
                
        }

        listen(){
                this.app.listen(process.env.PORT, () =>{
                        console.log('servidor',this.port)
                });

        }

}

module.exports= Server;