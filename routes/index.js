import routerX from 'express-promise-router';
import lugarRouter from './lugar';
import usuarioRouter from './usuario';
import comentariosRouter from './comentarios'

const router = routerX();

router.use('/lugar',lugarRouter);
router.use('/usuario', usuarioRouter);
router.use('/comentario', comentariosRouter)

export default router; 