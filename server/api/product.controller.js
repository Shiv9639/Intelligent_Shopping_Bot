const {
    getProductByNameAndOrPrice,
    getProductByCategory,
}=require('./product.service');

module.exports ={

    listProductByName :(req,res)=>{
        const name=req.query.name
        const price=req.query.price
        getProductByNameAndOrPrice(name,price,(err, results) => {
            if (err) {
              console.log(err);
            }
            else {
              return res.json(results);
            }
        });
    },

    productsByCategory:(req,res) => {

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
}