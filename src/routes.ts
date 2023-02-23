import { Router } from 'express';
import routes from './routes/index'

const router = Router();

router.use('/', routes);

export default router;
