import mongoose, {Schema} from 'mongoose';


const comentariosSchema = new Schema({
    Titulo: {type: String, maxlength: 255, required: true},
    ComentarioPrincipal: [{
        _id:{type:String, required:true},
        usuarioPadre: {type:String, required:true},
        comentarioColocado: {type:String, maxlength:255},
        establecimiento: {type:String,required:true},
        calificacion:{type:Number,required:true},
        teGusto:{type:Boolean},
        incremento:{type:Number},
        comentarioHijo:[{
            _id:{type:String,required:true},
            usuarioHijo: {type:String, required:true},
            comentarioColocado2: {type:String, maxlength:255},
            gustar:{type:Boolean},
        }]
    }],
    estado: {type:Number,default:1},
    createdAt: {type:Date, default:Date.now}
})



const comentarios = mongoose.model('comentarios',comentariosSchema);

export default comentarios;