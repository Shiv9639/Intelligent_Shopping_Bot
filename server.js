const express = require("express");
const app = express();
const productRouter = require('./server/api/product.router');
const bodyParser=require('body-parser');

app.use(express.json());

app.use("/api/v1", productRouter);


app.use(bodyParser.urlencoded({
  extended:false
}))

app.use(function (req, res, next) {
  

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

const port = 8085;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});