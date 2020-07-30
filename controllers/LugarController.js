import models from '../models';
//Agregar consulta de Historial con UsuarioId y Visto true
export default {
    add:async(req,res,next) => {
        try {
            if (req.file){
                const host = "http://localhost";
                const port = 3000;
                req.body.imgUrl = `${host}:${port}/public/${ req.file.filename}`
            }
            const reg= await models.Lugar.create(req.body);
           
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un eror'
            })
            next(e);
        }
    },
    Historial:async(req,res,next) => {
        try {
            let valor = req.query.valor;
            const reg= await models.Lugar.find({
                $or: [{'nombre': new RegExp(valor, 'i')},
                {'descripcion': new RegExp(valor, 'i')}],
                'LoVio':'false'
            }, {
                createdAt: 0,
            }).sort({'createdAt': -1});
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
            const reg=await models.Lugar.findOne({
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
            const reg= await models.Lugar.find({});
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
            const reg = await models.Lugar.findByIdAndUpdate({_id:req.body._id},{nombre:req.body.nombre,descripcion:req.body.descripcion,calificacion:reg.body.calificacion});
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
            const reg = await models.Lugar.findByIdAndDelete({_id:red.body._id});
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
            const reg = await models.Lugar.findByIdAndUpdate({_id:req.body._id},{estado:1});
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
            const reg = await models.Lugar.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrio un eror'
            })
            next(e);
        }
    }
}