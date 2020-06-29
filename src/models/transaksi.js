const db = require('../config/db')


const createTrx = (data)=> {
  return new Promise((resolve,reject)=> {
    db.query('INSERT INTO transaksi SET ?', data, (err, result)=> {
      if(!err){
        resolve(result)
      }else{
        reject(new Error (err))
      }
    })
  })
}


const getInvoice = (invoice)=> {
  return new Promise((resolve, reject)=> {
    db.query('SELECT transaksi.*,transaksi_detail.id_produk, transaksi_detail.produk_name, transaksi_detail.harga, transaksi_detail.qty, transaksi_detail.no_ppn, users.username FROM transaksi INNER JOIN transaksi_detail ON transaksi.invoice = transaksi_detail.invoice INNER JOIN users ON users.id_user = transaksi.id_user WHERE transaksi.invoice = ?', invoice, (err, result)=> {
      if(!err){
        resolve(result)
      }else{
        reject(new Error(err))
      }
    })
  })
}



module.exports = {
  createTrx,
  getInvoice
}