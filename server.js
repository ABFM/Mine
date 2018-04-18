const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const User = require('./db/index.js')
const app = express()
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/index.html'))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
