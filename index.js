const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

app.set('views', path.join(__dirname, 'views'));


app.get('/products', (req, res) => {
    
    res.send('Called /products');
})

app.listen(3000, () => {
    console.log('Application listening on port 3000');
});