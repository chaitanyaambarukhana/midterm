/*
File Name: index.js
Student Name : Chaitanya Sai Ambarukhana
Student ID : 301150058
Date : 07/03/2021
App Name : Favorite Book List - Midterm
*/


// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Requiring the books model
let book = require('../models/books');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
