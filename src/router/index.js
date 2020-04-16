const express = require('express');
const users = require('./user')
const menu = require('./menu')





const Router = express.Router()

Router
    .use('/user', users)
    .use('/menu', menu)
    .get('/', function (req, res){
    res.send('Welcome To My API')
})
module.exports = Router;