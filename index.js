const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const port = process.env.PORT || 8080

app.use('/', require('./src/app.routes.js'))

app.listen (port, () => {
    console.log(`Listening on port ${port}`);
}) 