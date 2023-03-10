const express = require('express');
const router = express();

const ordersController = require('../controllers/orders');

// for now, only working on active orders, and not orderhistory
router.get('/', ordersController.getAllActiveOrders);
router.get('/:id', ordersController.getOrderItem);

router.post('/', ordersController.createOrder);

router.patch('/:id', ordersController.updateOrderItem);

router.delete('/:id', ordersController.deleteOrderItem);

module.exports = router;
