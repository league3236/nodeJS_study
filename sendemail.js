var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

var AppConfig = {
    'sendEmailID': 'league3236@gmail.com',
    'sendEmailFromName': 'league3236@gmail.com',
    'sendEmailPassword': //'여기 비밀번호'
    }

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    // host: 'smtp-mail.outlook.com',
    port: '587',
    auth: {
        user: 'league3236@gmail.com',
        pass: AppConfig.sendEmailPassword
    },
    secureConnection: 'false',
    tls: {
        ciphers: 'SSLv3'
    }

});

// setup e-mail data with unicode symbols 
var mailOptions = {
    from: AppConfig.sendEmailFromName, // sender address 
    to: '',   // list of receivers 
    subject: '제목', // Subject line 
    html: 'gmail은 되나 lotte.net는 엑세스를 막아놧네요.. 어떻게해야할까요' // html body 
};

// send mail with defined transport object 
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        return console.log("ERROR----" + error);
    }
    console.log('Message sent: ' + info.response);
});
