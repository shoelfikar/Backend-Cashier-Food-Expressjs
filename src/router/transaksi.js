const express = require('express')
const Router = express.Router()
const trxController = require('../controller/transaksi')

Router
    .post('/', trxController.createTrx)



module.exports = Router