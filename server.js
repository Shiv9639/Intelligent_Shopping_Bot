const express = require("express");
const app = express();
const productRouter = require('./server/api/product.router');

app.use(express.json());

app.use("/api/v1", productRouter);


const port = 8080;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});