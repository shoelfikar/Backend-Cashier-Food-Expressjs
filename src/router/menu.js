const express = require('express');
const Router = express.Router()
const menuController = require('../controller/menu');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './uploads')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }

})

const upload = multer({
    storage
})


Router
    .get('/', menuController.getMenu)
    .get('/:id_menu', menuController.menuDetail)
    .post('/data',upload.single('image'),menuController.insertMenu)
    .patch('/:id_menu', upload.single('image'),menuController.updateMenu)
    .delete('/:id_menu', menuController.deleteMenu)
    



module.exports = Router