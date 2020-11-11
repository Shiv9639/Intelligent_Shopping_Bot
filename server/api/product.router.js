const router = require("express").Router();
const{ listProductByName}= require('./product.controller')

router.get('/products',listProductByName)
module.exports = router;
