const {
  getProducts,
}=require('./product.service');

module.exports ={

    listProducts :(req,res)=>{
        const price=req.body.price
        const category = req.body.ProductName;
        const brand = req.body.brand;
        const color = req.body.color;
        const gender = req.body.gender;
        const type = req.body.Types;
        const capacity = req.body.capacity;
        const description = req.body.Description;

        getProducts(price,category,brand,color,gender,type,capacity,description,(err, results) => {
            if (err) {
              console.log(err);
            }
            else {
              return res.json(results);
            }
        });
    },

}