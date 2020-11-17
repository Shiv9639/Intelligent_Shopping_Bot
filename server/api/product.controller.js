const {
  getProducts,
}=require('./product.service');

module.exports ={

    listProducts :(req,res)=>{
        const name=req.query.name
        const price=req.query.price
        const category = req.params.category;
        const brand = req.params.brand;
        getProducts(name,price,category,brand,(err, results) => {
            if (err) {
              console.log(err);
            }
            else {
              return res.json(results);
            }
        });
    },

  /*  productsByCategory:(req,res) => {

      const category = req.params.category;
      getProductByCategory(category,(err,results) => {
        if(err) {
          console.log(err);
        }
        else {
          return res.json(results);
        }
      });
    }
    */
}