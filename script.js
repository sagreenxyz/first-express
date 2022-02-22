const express = require('express');
const app = express(); // call constructor

app.get('/', (req, res) => {
    console.log('we did it!');
    res.send('PAGE CONTENT');
})