const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const routes = require('./routes/route/aws.js')

require('dotenv').config()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}));

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "./client/build")))
}

app.use(routes);

app.listen(PORT, () => console.log('app is now listening at 3000'))