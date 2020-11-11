const db = require('../config/connection')

module.exports={

    
    getProductByNameAndOrPrice:(name,price,callBack) =>{
        var query=''
        console.log(price)
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


        
    }

}