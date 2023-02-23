import { Collections } from '../models/shopify/Collections';

/**
 * Get all collections.
 *
 * @returns {Promise}
 */
export function getAllCollections() {
  return Collections.find(
    {},
    {
      product_ids: 0,
    }
  );
}

/**
 * Get a collection.
 *
 * @param   {Number|String}  id
 * @returns {Promise}
 */
export function getCollection(id: number | string) {
  return Collections.findById(id);
}
