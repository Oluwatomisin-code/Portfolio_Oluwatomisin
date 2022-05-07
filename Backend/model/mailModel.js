const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2


const Oauth2_client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
Oauth2_client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

const accessToken = async() => await Oauth2_client.getAccessToken()


const transporterOptions = {
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.USERMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken()
    }
};

const mailOption = (name, sendermail, subject, message) => {
    return {
        from: 'My Portfolio Website <process.env.USERMAIL>',
        to: process.env.USERMAIL,
        subject: "PORTFOLIO :- MAIL",
        replyTo: sendermail,
        html: `<div> 
                    <h2 style = "padding:10px; background-color: #00008b; color: #fff">
                        Mail from ${name}
                    </h2>
                    <h3> <strong>Subject:</strong> ${subject}</h3>
                    <p> 
                        <strong> Message:</strong> ${message}
                    </p>
                </div>`
    }
}
module.exports = { transporterOptions, mailOption }