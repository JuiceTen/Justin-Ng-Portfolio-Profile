const router = require('express').Router()
const aws = require('aws-sdk')
const path = require('path')

const ses = new aws.SES({region: 'us-west-2'})

if (process.env.NODE_ENV === "production") {
    router.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
  }

router.post('/email', (req, res) => {
    const {email, message, name} = req.body

    sesSend(process.env.Email || 'ng.justin07@gmail.com', email, message, name)
        .then((val) => {
            console.log(val)
            console.log('you got this email')
            res.send('success')
        })
        .catch((err) => {
        console.log(err)
        res.send('/err' + err)
        })
})

const sesSend = (emailTo, emailFrom, message, name) => {
    const params = {
        Destination: {
            ToAddresses: [emailTo]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'From personal website' + '\n' + `From ${name} : \n Message: ${message}`
                }
            },
            Subject: {
                Data: `you have been contacted by ${name}, ${emailFrom} from your personal page`
            }
            
        },
       
        Source: process.env.Email || 'ng.justin07@gmail.com'

        
    };
    return ses.sendEmail(params).promise()
}

module.exports = router