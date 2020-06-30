require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))
const Router = require('./src/router/index');
app.use('/api/v1/pos',Router)
app.use('/uploads',express.static('./uploads'))
app.use('/uploads/file',express.static('./uploads/file'))


app.listen(port, ()=> {
    console.log(`Apps is Running in Port ${port}`)
})