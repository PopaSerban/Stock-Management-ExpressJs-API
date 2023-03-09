const mongoose = require('mongoose');
const Product = require('../models/product');


mongoose.connect('mongodb://127.0.0.1:27017/stockManagementService').then(() => {
    console.log('Connected to MongoDB successfully');
}).catch( err => {
    console.error('failed to connect to MongoDB');
    console.error(err);
});


const seedProducts = [
    {
        name: 'Macbook Pro-charger',
        price: 100,
        category: 'Electronics',
        stock: 250
    },
    {
        name: 'Cauch',
        price: 160,
        category: 'Furniture',
        stock: 50
    },
    {
        name: '12 rules of life',
        price: 29.99,
        category: 'books',
        stock: 200
    },
    {
        name: 'Nike Air Max 90',
        price: 129.97,
        category: 'Clothing',
        stock: 250
    }
]
Product.insertMany(seedProducts).then(rezult => {
    console.log(rezult);
}).catch(err => {
    console.log(err);
});