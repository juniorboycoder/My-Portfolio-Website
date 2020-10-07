var nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
  auth: {
      api_key:'', // TODO: Replace with your mailgun API KEY
      domain: '' // TODO: Replace with your mailgun DOMAIN
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from:  email,
    to:'',
    subject:subject,
    text:text,
   
  };

  transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
          return cb(err, null);
      }
      return cb(null, data);
  });
}

module.exports = sendMail;