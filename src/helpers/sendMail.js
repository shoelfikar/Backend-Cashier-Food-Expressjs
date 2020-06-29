const mailer = require('nodemailer')
const helpers = require('./helpers')

const sendMail = (mailOptions) => {
  const transporter = mailer.createTransport({
    service : 'gmail',
    auth : {
      user : process.env.EMAIL,
      pass : process.env.EMAIL_PASS
    }
  })
  transporter.sendMail(mailOptions, (error, info)=> {
    if(error){
      console.log(error)
    }else {
      console.log(info)
    }
  })
}

module.exports = {
  sendMail
}