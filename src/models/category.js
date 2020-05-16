const connection = require('../config/db')


module.exports = {
    insertCat: (data)=>{
        return new Promise((resolve,reject)=>{
            connection.query("INSERT INTO category SET ?", data, (err,result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
    getCat:(search)=>{
        return new Promise((resolve,reject)=>{
            if(search){
                connection.query("SELECT * FROM category WHERE name_category LIKE ? ", `%${search}%`, (err,result)=> {
                    if(!err){
                        resolve(result)
                    }else{
                        reject(new Error(err))
                    }
                })  
            }else{
                connection.query("SELECT * FROM category", (err,result)=>{
                    if(!err){
                        resolve(result)
                    }else{
                        reject(new Error(err))
                    }
                })
            }
        })
    },
    detailCat:(id_category)=>{
        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM category WHERE id_category = ?", id_category, (err,result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
    updateCat:(id_category,data)=>{
        return new Promise((resolve,reject)=>{
            connection.query("UPDATE category SET ? WHERE id_category = ?", [data, id_category], (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    }
}