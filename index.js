import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose'
import router from './routes'

//Cadena de conexion la BD
mongoose.Promise = global.Promise;
const dbUrl = 'mongodb://localhost:27017/specialConcierge';
mongoose.connect(dbUrl, { useCreateIndex: true, useNewUrlParser: true })
    .then(mongoose => console.log('Conectando a la BD en el puerto 27017'))
    .catch(err => console.log(err));



const app = express();


app.use(express.static(path.join(__dirname,'public')))
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public',express.static(`${__dirname}/storage/img`))

app.use('/api',router);

app.set('port', process.env.PORT || 3000);



app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
});