require('dotenv').config();
const express = require('express')
const mailSender = require('./service/mailService')
const cors = require('cors')
    // const refresh = require('./genRefreshToken')

//initialize express app
const app = express();

//-----------------------------middlewares-----------------------------

//express bodyparser middleware
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json())

//cors middleware
app.use(cors())


// refresh.getRefreshToken()
//-----------------------------routes---------------------------------------------
app.get("/", (req, res) => {
    // console.log(req)
    res.send("working");

})

app.post("/sendmail", mailSender.mailService)



//----------------------------app to use static files in production----------------------
if (process.env.NODE_ENV == 'production') {
    app.use(express.static('../frontend/build'))
}


//---------------------------app listening---------------------------------------
app.listen(process.env.PORT, () => console.log(`${process.env.PORT} is live`))