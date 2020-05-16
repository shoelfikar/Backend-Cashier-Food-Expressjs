const express = require('express');
const users = require('./user')
const menu = require('./menu')
const category = require('./category')





const Router = express.Router()

Router
    .use('/user', users)
    .use('/menu', menu)
    .use('/category',category)
    .get('/', function (req, res){
    res.send({
        message: 'Welcome to my API',
        about: 'POS-APP v1',
        author: 'sulfikardi',
        thanks:'Thanks for visit my API'
    })
})
module.exports = Router;