const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const PaymentController = require('../payment')

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/logout', userController.logoutUser);

// router.post('/order', PaymentController.ProductOrder);
// router.post('/validate', PaymentController.validationPayment);
// '/orders'

module.exports = router;