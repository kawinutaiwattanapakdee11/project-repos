const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express()
mongoose.connect('mongodb://localhost:27017/ContactList', { useNewUrlParser: true, useUnifiedTopology: true });


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const contactsRoute = require('./routes/contacts')

app.use('/contacts', contactsRoute)

app.listen(3000);