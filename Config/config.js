// const mongoose=require('mongoose')
// const express=require('express')
// mongoose.connect("mongodb+srv://wd7576383:XnjvLvtFWIvQWXWA@cluster0.tjoqfnu.mongodb.net/").then(()=>{console.log('sucessful')})
// .catch((err)=>{console.log(err.message);});

require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.DB_DATABASE
mongoose.connect(url).then(()=>{
    console.log('Connected to database')
}).catch((error)=>{
    console.log(error.message)
})