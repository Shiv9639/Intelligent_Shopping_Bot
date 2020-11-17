const { getConnection } = require('../config/connection')
const db = require('../config/connection')

module.exports={

    
    getProducts:(name,price,category,brand,color,gender,type,capacity,callBack) =>{
        let query=''
        if(price!==undefined){
            query=`select * from Product where product_name like '%${name}%' and product_price <=`+ parseInt(price,10)
        }
        else if(category!==undefined){
            query = `select * from Product where product_category like '%${category}%'`;

        }
        else if(brand!==undefined){
            query = `select * from Product where product_category like '%${brand}%'`;
        }
        else if(name!==undefined){
            query=`select * from Product where product_name like '%${name}%'`
        }
        else if(color!==undefined){
            query=`select * from Product where product_color like '%${color}%'`
        }
        else if(gender!==undefined){
            query=`select * from Product where gender like '%${gender}%'`
        }
        else if(type!==undefined){
            query=`select * from Product where product_types like '%${type}%'`
        }
        else if(capacity!==undefined){
            query=`select * from Product where capacity like '%${capacity}%'`
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