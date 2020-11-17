const router = require("express").Router();
const{ listProducts}= require('./product.controller')

router.get('/products',listProducts);
module.exports = router;
