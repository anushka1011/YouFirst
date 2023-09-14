var mailer = require("nodemailer");
const express = require("express");
const router = express.Router();

// Use Smtp Protocol to send Email
router.post(
    "/",async(req,res)=>{
        try{
            var transporter = mailer.createTransport({
                service: 'outlook',
                auth: {
                  user: 'akanushka9896@outlook.com',
                  pass: 'Anushka_9896689091'
                }
              });
              
              var mailOptions = {
                from: 'akanushka9896@outlook.com',
                to: 'akanushka9896@gmail.com',
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
            res.send('mail sent');
        }
        catch(err){
            console.log(err);
        }
    }
);
module.exports = router;
