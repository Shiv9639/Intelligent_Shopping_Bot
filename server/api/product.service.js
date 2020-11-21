const { getConnection } = require('../config/connection')
const db = require('../config/connection')

module.exports={

    
    getProducts:(name,price,category,brand,color,gender,type,capacity,description,callBack) =>{
        let query="select * from Product where 1=1"
       
        if(category!==undefined){
            query=query+ " and product_category like '%"+category+"%'";
        }
        if(name!==undefined){
            query=query+ " and product_name like '%"+name+"%'";
        }
        if(price!==undefined){
            query=query+ " and product_price <= "+parseFloat(price);
        }
        if(brand!==undefined){
            query=query+ " and product_brand like '%"+brand+"%'";
        }
        if(color!==undefined){
            query=query+ " and product_color like '%"+color+"%'";
        }
        if(gender!==undefined){
            query=query+ " and gender like '%"+gender+"%'";
        }
        if(type!==undefined){
            query=query+ " and product_types like '%"+type+"%'";
        }
        if(capacity!==undefined){
            query=query+ " and capacity like '%"+capacity+"%'";
        }
        if(description!==undefined){
            query=query+ " and product_description like '%"+description+"%'";
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