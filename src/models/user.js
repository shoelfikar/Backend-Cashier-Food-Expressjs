const connection = require('../config/db')

module.exports = {
    getUsers: ()=> {
        return new Promise((resolve,reject)=> {
            connection.query("SELECT * FROM users", (err,result)=> {
                if(!err){
                    resolve(result)
                }else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertUsers: (data)=> {
        return new Promise((resolve,reject)=> {
            connection.query("INSERT INTO users SET ?", data,(err,result)=> {
                if(!err){
                    resolve(result)
                }else {
                    reject(new Error(err))
                }
            })
        })
    },
    login:(email)=> {
        return new Promise((resolve,reject)=> {
            connection.query("SELECT * FROM users WHERE email = ?", email,(err,result)=> {
                if(!err){
                    resolve(result[0])
                }else if(err) {
                    reject(new Error(err))
                }else {
                    reject(new Error(err))
                }
            })
        })
    },
    userDetail:(id_user)=> {
        return new Promise((resolve,reject)=> {
            connection.query("SELECT * FROM users WHERE id_user = ?",id_user,(err,result)=> {
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
    deleteUsers: (id_user)=> {
        return new Promise((resolve,reject)=> {
            connection.query("DELETE FROM users WHERE id_user = ?", id_user,(err,result)=> {
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },
    updateUsers: (id_user,data)=> {
        return new Promise((resolve,reject)=>{
            connection.query("UPDATE users SET ? WHERE id_user = ?",[data,id_user],(err,result)=> {
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    }
        
}