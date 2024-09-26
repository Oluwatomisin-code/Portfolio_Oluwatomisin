const { google } = require('googleapis');


const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground' // Your redirect URI
);

// Generate an authorization URL
const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline', // Important for getting refresh tokens
    scope: ['https://www.googleapis.com/auth/gmail.send'], // Adjust as needed
});


// After the user visits the URL, they will be redirected back with a code
module.exports.getRefreshToken = async() => {
    const { tokens } = await oauth2Client.getToken("4/0AQlEd8wpFErpN5L0I-Qa2NTGE44gHJEYitu2iHD3Q2JO_k_XRZ9kmpNYSsvasSEH1cS1NQ");
    console.log(tokens)
        // console.log('Authorize this app by visiting this url:', authUrl);

}