const express = require('express');
const users = require('./user')
const menu = require('./menu')
const category = require('./category')
const detail = require('./transaksi_detail')
const transaksi = require('./transaksi')
const history = require('./history')





const Router = express.Router()

Router
    .use('/user', users)
    .use('/menu', menu)
    .use('/category',category)
    .use('/detail', detail)
    .use('/transaksi', transaksi)
    .use('/history', history)
    .get('/', function (req, res){
    res.send({
        message: 'Welcome to my API',
        about: 'POS-APP v1',
        author: 'sulfikardi',
        linkEndPoint: {
            menu : 'https://api1.sulfikardi.my.id/menu',
            user : 'https://api1.sulfikardi.my.id/user',
            category : 'https://api1.sulfikardi.my.id/category',
            DetailTransaksi : 'https://api1.sulfikardi.my.id/detail',
            transaksi : 'https://api1.sulfikardi.my.id/transaksi',
            history : 'https://api1.sulfikardi.my.id/history'
        }
    })
})
module.exports = Router;