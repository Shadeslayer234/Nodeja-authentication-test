const express = require('express')
const mongoose = require('mongoose')
const app = express()

const dbUrl = "mongodb://localhost/authentication"
app.use(expres.json())

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on("error", err => {console.error(err)})
db.once("open", () => {console.log('DB started successfully')})


app.listen(2400, () => cosole.log('Server started: 2400') )
