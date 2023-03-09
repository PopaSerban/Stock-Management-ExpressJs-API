const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

//Used to rezolve cross origin requests errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

mongoose.connect('mongodb://127.0.0.1:27017/stockManagementService').then(() => {
    conssole.log('Connected to MongoDB successfully');
}).catch( err => {
    console.error(err);
});

app.set('views', path.join(__dirname, 'views'));


app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.send(products);
})

app.listen(3000, () => {
    console.log('Application listening on port 3000');
});