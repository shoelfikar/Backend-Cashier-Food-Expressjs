const express = require('express')
const Router = express.Router()
const historyController = require('../controller/history')

Router
    .get('/lastmonth', historyController.getLastMonthHistory)
    .get('/currentmonth', historyController.getCurrentMonthHistory)
    .get('/alltimes', historyController.getHistory)




module.exports = Router;