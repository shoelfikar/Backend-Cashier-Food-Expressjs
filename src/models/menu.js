const connection = require('../config/db');

module.exports = {
    insertMenu: (data)=> {
        return new Promise((resolve,reject)=>{
           connection.query("INSERT INTO menu SET ?",data,(err,result)=>{
               if(!err){
                   resolve(result)
               }else{
                   reject(new Error(err))
               }
           }) 
        })
    },
    getMenu: (search)=>{
        return new Promise((resolve,reject)=>{
            if(search){
                connection.query("SELECT * FROM menu WHERE name LIKE ? ORDER BY name",`%${search}%`,(err,result)=>{
                    if(!err){
                        resolve(result)
                    }else{
                        reject(new Error(err))
                    }
                })
            }else{
                connection.query("SELECT * FROM menu", (err,result)=> {
                    if(!err){
                        resolve(result)
                    }else{
                        reject(new Error(err))
                    }
                })
            }
            
        })
    },
    menuDetail:(id_menu)=>{
        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM menu WHERE id_menu = ?", id_menu, (err,result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
    updateMenu:(id_menu,data)=>{
        return new Promise((resolve,reject)=>{
            connection.query("UPDATE menu SET ? WHERE id_menu = ?",[data,id_menu], (err,result)=> {
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
    deleteMenu:(id_menu)=> {
        return new Promise((resolve,reject)=>{
            connection.query("DELETE FROM menu WHERE id_menu = ?", id_menu,(err,result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
    sortMenu:(sort)=>{
        return new Promise((resolve,reject)=> {
            connection.query(
                `SELECT * FROM menu ORDER BY ${sort} ASC`, (err,result)=> {
                    if(!err){
                        resolve(result)
                    }else{
                        reject(new Error(err))
                    }
                }
            )
        })
    }
}