import models from '../models';
import bcrypt from 'bcryptjs';
import token from '../services/token';

export default {
    add:async(req,res,next) => {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10);
            if (req.file){
                const host = "http://localhost";
                const port = 3000;
                req.body.imgUrl = `${host}:${port}/public/${ req.file.filename}`
            }
            const reg= await models.Usuario.create(req.body);
           
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un eror'
            })
            next(e);
        }
    },
    query:async(req,res,next) => {
        try {
            const reg=await models.Usuario.findOne({
                _id:id.req.query._id
            });
            if (!reg){
                res.status(404).send({
                    message: 'El registro no existe'
                })
            } else {
                res.status(200).json(reg);
            }
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un eror'
            })
            next(e);
        }
    },
    list:async(req,res,next) => {
        try {
            const reg= await models.Usuario.find({});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un eror'
            })
            next(e);
        }
    },
    update:async(req,res,next) => {
        try {
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.body._id},{nombre:req.body.nombre,password:req.body.password,tipoDiscapacidad:req.body.tipoDiscapacidad});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un eror'
            })
            next(e);
        }
    },
    remove:async(req,res,next) => {
        try {
            const reg = await models.Usuario.findByIdAndDelete({_id:red.body._id});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un eror'
            })
            next(e);
        }
    },
    active:async(req,res,next) => {
        try {
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.body._id},{estado:1});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un eror'
            })
            next(e);
        }
    },
    deactivate:async(req,res,next) => {
        try {
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un eror'
            })
            next(e);
        }
    },
    login: async(req, res, next) => {
        try {
            let user = await models.Usuario.findOne({ email: req.body.email, estado: 1 });
            console.log( req.body )
            if (user) {
                let match = await bcrypt.compare(req.body.password, user.password);
                if (match) {
                    let tokenReturn = await token.enconde(user._id);
                    res.status(200).json({ user, tokenReturn });
                } else {
                    res.status(404).send({
                        message: 'Password Incorrecto'
                    });
                }
            } else {
                res.status(404).send({
                    message: 'No existe el usuario'
                });
            }
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrio un error'
            });
            next(e);
        }
    }
}