const router = require("express").Router();
const{ listProductByName, productsByCategory }= require('./product.controller')

router.get('/products',listProductByName);
router.get('/products/categories/:category',productsByCategory);


module.exports = router;
