import { Router } from 'express';
import * as collections from '../controllers/ecommerce/collections';

const router = Router();

/**
 * GET /api/categories
 */
router.get('/', collections.fetchAll);

/**
 * GET /api/categories/:id
 */
router.get('/:id', collections.fetchById);

export default router;
