const {
  getProducts,
}=require('./product.service');

module.exports ={

    listProducts :(req,res)=>{
        const name=req.query.name
        const price=req.query.price
        const category = req.query.category;
        const brand = req.query.brand;
        const color = req.query.color;
        const gender = req.query.gender;
        const type = req.query.type;
        const capacity = req.query.capacity;

        getProducts(name,price,category,brand,color,gender,type,capacity,(err, results) => {
            if (err) {
              console.log(err);
            }
            else {
              return res.json(results);
            }
        });
    },

}