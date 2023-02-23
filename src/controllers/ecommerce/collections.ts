
import { Request, Response, NextFunction } from 'express';
import * as categoryService from '../../services/collectionService';

/**
 * Get all categories.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAll(req: Request, res: Response, next: NextFunction) {
    categoryService
        .getAllCollections()
        .then(data => res.json({ data, status: 'success', message: '' }))
        .catch(err => next(err));
}

/**
 * Get a category by its id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchById(req: Request, res: Response, next: NextFunction) {
    categoryService
        .getCollection(req.params.id)
        .then(data => res.json({ data, status: 'success', message: '' }))
        .catch(err => next(err));
}
