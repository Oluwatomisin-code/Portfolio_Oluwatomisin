const options = require('../model/mailModel')
const nodemailer = require('nodemailer')

module.exports.mailService = (req, res) => {

    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message
    const transporter = nodemailer.createTransport(options.transporterOptions)

    transporter.sendMail(options.mailOption(name, email, subject, message), async(err, result) => {
        err ? res.status(400).send("error occured while sending mail") : res.status(200).send("mail sent")
    })
}