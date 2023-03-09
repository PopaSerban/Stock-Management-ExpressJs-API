const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/stockManagementService').then(() => {
    conssole.log('Connected to MongoDB successfully');
}).catch( err => {
    console.error(err);
});

app.set('views', path.join(__dirname, 'views'));


app.get('/products', (req, res) => {
    
    res.send('Called /products');
})

app.listen(3000, () => {
    console.log('Application listening on port 3000');
});