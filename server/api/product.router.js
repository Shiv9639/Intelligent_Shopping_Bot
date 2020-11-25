const router = require("express").Router();
const{ listProducts } = require('./product.controller');
const {dialogflowController } = require('./dialogflow.controller');


router.post('/products',listProducts);
router.post('/dialogflowgateway', dialogflowController);
module.exports = router;
