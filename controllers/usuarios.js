const { request } = require("express");
const { response } = require("express");



const  usuariosGet = (req, res) => {


        const {q, nombre="nombre" , apikey} = req.query;
        res.json({
                
                msg: 'get API controlador',
                q,
                nombre,
                apikey
        });
}

const usuariosPost = (req, res) => {
        const body = req.body
        
        res.json({

                
                msg: 'post API controlador',
                body
        })
}

const usuariosPut = (req, res) => {
        const id = req.params.id;
        res.json({

                
                msg: 'put API controlador',
                id

        })
}
const usuariosDelete = (req, res) => {
        res.json({
                
                msg: 'delete API controlador'

        })
}
const usuariosPatch = (req, res) => {
        res.json({
                
                msg: 'patch API controlador'

        })
}
module.exports = {
        usuariosGet,
        usuariosPost,
        usuariosDelete,
        usuariosPut,
        usuariosPatch
}