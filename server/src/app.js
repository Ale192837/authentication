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


const test = require('@model/getUser');
app.post('/test', async (req, res) => {
  res.send('Test!')
  const user = await test(req.body.username);
  console.log("user: " + user);
});

app.use('/', routes);
  
module.exports = app;