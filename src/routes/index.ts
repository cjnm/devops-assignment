import { Router } from 'express';
// import fileRoutes from './fileRoutes';
import collectionRoutes from './collectionRoutes';

const router = Router();

// router.use('/files', fileRoutes);
router.use('/collections', collectionRoutes);

export default router;
