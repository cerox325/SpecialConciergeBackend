import routerX from 'express-promise-router';
import LugarController from '../controllers/LugarController'
import upload from '../libs/storage'
import auth from '../middlewares/auth';

const router = routerX();

router.post('/add',auth.verifyUsuario,upload.single('imgUrl'),LugarController.add);
router.get('/query',auth.verifyUsuario,LugarController.query);
router.get('/list',LugarController.list);
router.get('/Historial',auth.verifyUsuario,LugarController.list);
router.put('/update',auth.verifyUsuario,LugarController.update);
router.delete('/remove',auth.verifyUsuario,LugarController.remove);
router.put('/active',auth.verifyUsuario,LugarController.active);
router.put('/deactivate',auth.verifyUsuario,LugarController.deactivate);


export default router;