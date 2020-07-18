const express = require('express');
const Router = express.Router()
const menuController = require('../controller/menu');
const multer = require('multer');
const cahce = require('../helpers/caching')

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
    .get('/',cahce.getCache, menuController.getMenu)
    .get('/sort/:sort', menuController.sortMenu)
    .get('/:id_menu', menuController.menuDetail)
    .post('/data',cahce.delCache, upload.single('image'),menuController.insertMenu)
    .patch('/:id_menu',cahce.delCache, upload.single('image'),menuController.updateMenu)
    .delete('/:id_menu',cahce.delCache, menuController.deleteMenu)
    



module.exports = Router