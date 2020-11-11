const db = require('../config/connection')

module.exports={

    
    getProductByNameAndOrPrice:(name,price,callBack) =>{
        let query=''
        if(price!==undefined){
            query=`select * from Product where product_name like '%${name}%' and product_price <=`+ parseInt(price,10)
        }
        else{
            query=`select * from Product where product_name like '%${name}%'`
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

    getProductByCategory:(category,callBack) => {
        let query = '';
        query = `select * from Product where product_category like '%${category}%'`;
        db.query(query,
            (error,results,fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null,results);
            }
        );
    }
    
  


        


}