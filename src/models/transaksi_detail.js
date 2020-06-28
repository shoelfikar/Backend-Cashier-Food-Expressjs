const db = require('../config/db')



module.exports = {
    insertDetail : (data)=> {
      return new Promise((resolve, reject)=> {
        db.query('INSERT INTO transaksi_detail (invoice, id_produk, produk_name, harga, qty, no_ppn) VALUES ?',[data], (err, result)=> {
          if(!err){
            resolve(result)
          }else{
            reject(new Error(err))
          }
        })
      })
    }
}