const express = require('express')
const mongoose = require('mongoose')
const app = express()

const dbUrl = "mongodb+srv://demo:demo@cluster0.e2sg7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
app.use(express.json())

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on("error", err => {console.error(err)})
db.once("open", () => {console.log('DB started successfully')})


app.listen(2400, () => console.log('Server started: 2400') )
