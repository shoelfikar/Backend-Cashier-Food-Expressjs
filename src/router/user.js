const express = require('express');
const Router = express.Router()
const usersController = require('../controller/user')



Router
    .get('/', usersController.getUsers)
    .post('/register', usersController.insertUsers)
    .post('/login', usersController.login)
    .get('/:id_user',usersController.userDetail)
    .delete('/:id_user', usersController.deleteUsers)
    .patch('/:id_user', usersController.updateUsers)






module.exports = Router;