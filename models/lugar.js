import mongoose, {Schema} from 'mongoose';
import {appConfig} from '../config'

const lugarSchema = new Schema({
    nombre: {type: String, maxlength: 80, unique: true, required: true},
    descripcion: {type:String, maxlength:255},
    calificacion: {type:Number, default:0},
    imgUrl: {type:String},
    _idUsuario:{type:String},
    loVio:{type:Boolean,default:false},
    latitude: {type:String,required:true, unique:true},
    longitude: {type:String,required:true, unique:true},
    estado: {type:Number,default:1},
    createdAt: {type:Date, default:Date.now}
})


lugarSchema.methods.setImgUrl = function setImgUrl (filename){
    const {host, port} = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

const lugar = mongoose.model('lugar',lugarSchema);

export default lugar;