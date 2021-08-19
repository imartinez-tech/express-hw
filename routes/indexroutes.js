const data = require('express').Router();

const path = require('path'); 
const fs = require('fs'); 

data.get('/', (req, res) => {
    fs.readFile('./db.json').then((result) => res.json(JSON.parse(result)));
})

module.exports = data; 

