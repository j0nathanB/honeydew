const express = require('express');
const path = require('path');
const db = require('../db')

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html')) 
});

app.listen(port, () => console.log('Listening on port', port));
