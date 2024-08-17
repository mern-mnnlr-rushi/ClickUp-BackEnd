const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


mongoose.connect(process.env.mongoDb).then(() => {
    console.log("MongoDB connected.");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
