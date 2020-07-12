const trxModels = require('../models/transaksi')
const helpers = require('../helpers/helpers')
const mail = require('../helpers/sendMail')


const createTrx = (req, res)=> {
  const {
    invoice,
    total,
    ppn,
    qty_total,
    id_user
  } = req.body
  const data = {
    invoice : invoice,
    total : total,
    ppn : ppn,
    qty_total : qty_total,
    id_user : id_user
  }
  trxModels.createTrx(data)
    .then(result => {
      helpers.response(res, result, 200, 'success', null)
    })
    .catch(err => {
      console.log(err)
      helpers.response(res, null, 500, 'failed', err)
    })
}




const getInvoice = (req, res)=> {
  // const invoice = req.query.invoice
  // const {email} = req.body
  trxModels.getInvoice()
    .then(result => {
      console.log(result)
      helpers.response(res, result, 200, 'success', null)
    })
    .catch(err => {
      console.log(err)
      helpers.response(res, null, 500, 'failed', err)
    })
}

const sendInvoice = (req, res)=> {
  const {email, invoice} = req.body
  const data = {
    email: email,
    invoice: invoice
  }
  if(data.invoice !== undefined){
    const mailOptions = {
      from: process.env.EMAIL,
      to: data.email,
      subject: `Invoice ${data.invoice}`,
      html: `<h4>dkasir-pos-app Invoice</h4>`,
      attachments: [{
        filename: `${data.invoice}.pdf`,
        path: `./uploads/file/${data.invoice}.pdf`,
        contentType: 'application/pdf'
      }],
    }
    const senderEmail = mail.sendMail(mailOptions)
    helpers.response(res, senderEmail, 200, 'success', null)
  }else{
    res.status(500).send({
      status: 'failed',
      message: 'something wrong',
    })
  }
}



module.exports = {
  createTrx,
  getInvoice,
  sendInvoice
}