const mongoose = require('mongoose');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://uvprakash:uvprakash@cluster0.5ariv.mongodb.net/dbname?retryWrites=true&w=majority";

const connectDB = async()=> {
    await mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true } );
    console.log('db connected..!');
}

module.exports = connectDB;