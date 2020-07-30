import tokeService from '../services/token';
import token from '../services/token';

export default {
    verifyUsuario: async(req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No token acceso'
            })
        }
        const response = await tokeService.decode(req.headers.token);
        if (response) {
            // console.log(tokeService.decode(req.headers.token))
            next();
        } else {
            return res.status(403).send({
                message: 'No Autorizado'
            })
        }
    },
    // verifyAdministrador: async(req, res, next) => {
    //     if (!req.headers.token) {
    //         return res.status(404).send({
    //             message: 'No token'
    //         })
    //     }
    //     const response = await tokeService.decode(req.headers.token);
    //     if (response.rol == 'Administrador') {
    //         next();
    //     } else {
    //         return res.status(403).send({
    //             message: 'No Autorizado'
    //         })
    //     }
    // },
    // verifyAlmacenero: async(req, res, next) => {
    //     if (!req.headers.token) {
    //         return res.status(404).send({
    //             message: 'No token'
    //         })
    //     }
    //     const response = await tokeService.decode(req.headers.token);
    //     if (response.rol == 'Administrador' || response.rol == 'Almacenero') {
    //         next();
    //     } else {
    //         return res.status(403).send({
    //             message: 'No Autorizado'
    //         })
    //     }
    // },
    // verifyVendedor: async(req, res, next) => {
    //     if (!req.headers.token) {
    //         return res.status(404).send({
    //             message: 'No token'
    //         })
    //     }
    //     const response = await tokeService.decode(req.headers.token);
    //     if (response.rol == 'Administrador' || response.rol == 'Vendedor') {
    //         next();
    //     } else {
    //         return res.status(403).send({
    //             message: 'No Autorizado'
    //         })
    //     }
    // }
}