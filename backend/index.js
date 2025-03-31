const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {readFileSync} = require('fs');
require('dotenv').config();

const app = express();
const url = process.env.MONGODB_URI;
const port = process.env.PORT || 3001;

app.use(cors())
app.get("/",(req,res)=>{
    res.send("API is working")
})

mongoose.connect(url)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

