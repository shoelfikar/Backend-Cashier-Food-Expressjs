const express = require('express')
const Router = express.Router()
const categoryController = require('../controller/category')




Router
    .get('/',categoryController.getCat)
    .get('/:id_category', categoryController.detailCat)
    .post('/', categoryController.insertCat)
    .patch('/:id_category', categoryController.updateCat)







module.exports = Router