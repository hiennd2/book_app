const nodemailer = require('nodemailer')

/**
 * user send mail
 * @ {string}
 */
exports.userSendMail = () => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'hiennd@foobla.com',
          pass: 'hiennd2458696357'
        }
      });
      
    var mailOptions = {
        from: 'Me',
        to: 'hiennd@foobla.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });    
}