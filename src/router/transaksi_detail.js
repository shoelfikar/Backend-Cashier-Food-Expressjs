const express = require('express')
const Router = express.Router()
const detailController = require('../controller/transaksi_detail')

Router
    .post('/', detailController.insertDetail)



module.exports = Router