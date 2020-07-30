import mongoose, {Schema} from 'mongoose';
import {appConfig} from '../config'

const usuarioSchema = new Schema({
    nombre: {type:String, maxlength:255, unique:true},
    email: { type: String, maxlength: 50, unique: true, required: true },
    password: { type: String, maxlength: 64, required: true },
    discapacidad:{type:Boolean, default:false},
    tipoDiscapacidad:{type:String, maxlength:255},
    imgUrl: {type:String},
    estado: {type:Number,default:1},
    createdAt: {type:Date, default:Date.now}
});

usuarioSchema.methods.setImgUrl = function setImgUrl (filename){
    const {host, port} = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}


const usuario = mongoose.model('usuario',usuarioSchema);

export default usuario;