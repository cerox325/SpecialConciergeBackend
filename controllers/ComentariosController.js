import models from '../models';


export default {
    add:async(req,res,next) => {
        try {
            const reg= await models.Comentarios.create(req.body);
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
            const reg=await models.Comentarios.findOne({
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
            
            const reg= await models.Comentarios.find({});
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
            const reg = await models.Comentarios.findByIdAndUpdate({_id:req.body._id},{nombre:req.body.nombre,descripcion:req.body.descripcion,calificacion:reg.body.calificacion});
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
            const reg = await models.Comentarios.findByIdAndDelete({_id:red.body._id});
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
            const reg = await models.Comentarios.findByIdAndUpdate({_id:req.body._id},{estado:1});
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
            const reg = await models.Comentarios.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un eror'
            })
            next(e);
        }
    }
}