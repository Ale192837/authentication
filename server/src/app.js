const express = require('express');
const routes = require('./routes');
const sendError = require('@helper/sendError');

const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(sendError);



app.get('/login', (req, res) => {
  res.send('Hello World!')
  console.log("get express req")
});

app.use('/', routes);
  
module.exports = app;