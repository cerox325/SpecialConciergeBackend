import routerX from 'express-promise-router';
import UsuarioController from '../controllers/UsuarioController'
import upload from '../libs/storage'
import auth from '../middlewares/auth';


const router = routerX();

router.post('/add',upload.single('imgUrl'),UsuarioController.add);
router.get('/query',auth.verifyUsuario,UsuarioController.query);
router.get('/list',auth.verifyUsuario,UsuarioController.list);
router.put('/update',auth.verifyUsuario,UsuarioController.update);
router.delete('/remove',auth.verifyUsuario,UsuarioController.remove);
router.put('/active',auth.verifyUsuario,UsuarioController.active);
router.put('/deactivate',auth.verifyUsuario,UsuarioController.deactivate);
router.post('/login', UsuarioController.login);


export default router;