const trxModels = require('../models/transaksi')
const helpers = require('../helpers/helpers')


const createTrx = (req, res)=> {
  const {
    invoice,
    total,
    ppn,
    qty_total,
    id_user
  } = req.body
  const data = {
    invoice : invoice,
    total : total,
    ppn : ppn,
    qty_total : qty_total,
    id_user : id_user
  }
  trxModels.createTrx(data)
    .then(result => {
      helpers.response(res, result, 200, 'success', null)
    })
    .catch(err => {
      console.log(err)
      helpers.response(res, null, 500, 'failed', err)
    })
}


module.exports = {
  createTrx
}