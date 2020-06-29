const express = require('express')
const Router = express.Router()
const trxController = require('../controller/transaksi')

Router
    .get('/', trxController.getInvoice)
    .post('/', trxController.createTrx)
    .post('/sendmail', trxController.sendInvoice)



module.exports = Router