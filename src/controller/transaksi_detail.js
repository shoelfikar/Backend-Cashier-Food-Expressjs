const detailModels = require('../models/transaksi_detail')
const helpers = require('../helpers/helpers')

module.exports = {
  insertDetail : (req, res)=> {
    const data = req.body
    detailModels.insertDetail(data)
    .then(result => {
      helpers.response(res, result, 200, 'success', null)
    })
    .catch(err => {
      helpers.response(res, null, 403, 'failed', err)
    })
  }
}