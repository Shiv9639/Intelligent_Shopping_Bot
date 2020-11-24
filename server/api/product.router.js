const router = require("express").Router();
const{ listProducts } = require('./product.controller');
const {dialogflowController } = require('./dialogflow.controller');


router.get('/products',listProducts);
router.post('/dialogflowgateway', dialogflowController);
module.exports = router;
