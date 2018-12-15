const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const Users = require("./models");
const controller= require('./controllers.js');
const path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/dictionary');
mongoose.connection.once('open', () => {
  console.log('Connected with dictionary db!!!!!!!!!!!!!!!!!!');
});

console.log("***CONTROLLER***", controller.addEntry)


//addUser
// app.post('/signUp', (req, res) => {
//
// });
//addEntry
app.post('/', controller.addEntry, (req, res) => {
  res.end();
})
//
// //getEntries
// app.get('/', (req, res) => {
//
// })

//test
app.get('/', (req, res) => {
  res.send("Love");
});

// app.listen(8080, () => {
//   console.log("listening on 8080")
// })

module.exports = app;
