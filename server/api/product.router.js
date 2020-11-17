const router = require("express").Router();
const{ listProducts}= require('./product.controller')

router.get('/products',listProducts);
router.get('/products/categories/:category',listProducts);
router.get('/products/brand/:brand',listProducts);

module.exports = router;
