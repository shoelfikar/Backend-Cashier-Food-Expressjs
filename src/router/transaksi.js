const express = require('express')
const Router = express.Router()
const trxController = require('../controller/transaksi')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './uploads/file')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }

})

const upload = multer({
    storage
})

Router
    .get('/', trxController.getInvoice)
    .post('/', trxController.createTrx)
    .post('/sendmail',trxController.sendInvoice)
    .post('/invoice', upload.single('file'), (req, res, next) => {
        const file = req.file
        if (!file) {
          const error = new Error('Please upload a file')
          error.httpStatusCode = 400
          return next(error)
        }
          res.send(file)
    })



module.exports = Router