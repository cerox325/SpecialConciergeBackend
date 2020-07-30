import routerX from 'express-promise-router';
import ComentariosController from '../controllers/ComentariosController'
import auth from '../middlewares/auth';


const router = routerX();

router.post('/add',auth.verifyUsuario,ComentariosController.add);
router.get('/query',auth.verifyUsuario,ComentariosController.query);
router.get('/list',ComentariosController.list);
router.put('/update',auth.verifyUsuario,ComentariosController.update);
router.delete('/remove',auth.verifyUsuario,ComentariosController.remove);
router.put('/active',auth.verifyUsuario,ComentariosController.active);
router.put('/deactivate',auth.verifyUsuario,ComentariosController.deactivate);


export default router;