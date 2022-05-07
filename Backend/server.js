require('dotenv').config();
const express = require('express')
const mailSender = require('./service/mailService')
const cors = require('cors')

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


//-----------------------------routes---------------------------------------------
app.get("/", (req, res) => {
    res.send("working");
})

app.post("/sendmail", mailSender.mailService)


//---------------------------app listening---------------------------------------
app.listen(process.env.PORT, () => console.log(`${process.env.PORT} is live`))