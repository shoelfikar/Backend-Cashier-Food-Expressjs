const db = require('../config/db')


const createTrx = (data)=> {
  return new Promise((resolve,reject)=> {
    db.query('INSERT INTO transaksi SET ?', data, (err, result)=> {
      if(!err){
        resolve(result)
      }else{
        reject(err)
      }
    })
  })
}



module.exports = {
  createTrx
}