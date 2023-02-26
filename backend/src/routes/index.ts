import { Router } from 'express';
const router = Router();

router.get('/orders', (req, res, next) => {
  const order = {
    user: {
      id: 123,
      name: 'John Doe',
      email: 'johndoe@example.com',
    },
    orders: [
      {
        id: 456,
        product: 'Widget A',
        quantity: 2,
        price: 10.99,
      },
      {
        id: 789,
        product: 'Widget B',
        quantity: 1,
        price: 19.99,
      },
    ],
  };

  return res.status(200).send(order);
});

export default router;
