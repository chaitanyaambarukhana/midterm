/*
File Name: books.js
Student Name : Chaitanya Sai Ambarukhana
Student ID : 301150058
Date : 07/03/2021
App Name : Favorite Book List - Midterm
*/

//Importing mongoose
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

//exporting model using module exports
module.exports = mongoose.model('Book', Book);
