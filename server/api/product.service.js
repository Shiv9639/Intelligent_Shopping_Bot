const db = require('../config/connection')

module.exports={

    
    getProducts:(price,category,brand,color,gender,type,capacity,description,callBack) =>{

        


        let query="select * from Product where 1=1"
       
        if(category!==undefined){
            query=query+ " or LOWER(product_category) like '%"+category+"%'";
        }
        if(price!==undefined){
            query=query+ " or product_price <= "+parseFloat(price);
        }
        if(brand!==undefined){
            query=query+ " or LOWER(brand) like '%"+brand+"%'";
        }
        if(color!==undefined){
            query=query+ " or LOWER(product_color) like '%"+color+"%'";
        }
        if(gender!==undefined){
            query=query+ " or LOWER(gender) like '%"+gender+"%'";
        }
        if(type!==undefined){
            query=query+ " or LOWER(product_types) like '%"+type+"%'";
        }
        if(capacity!==undefined){
            query=query+ " or LOWER(capacity) like '%"+capacity+"%'";
        }
        if(description!==undefined){
            query=query+ " or LOWER(product_description) like '%"+description+"%'";
        }
      
       

        db.query(query,
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

}