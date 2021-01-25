const express = require('express');
const createHttpErrors = require('http-errors');
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', require('./routes/index.route'));

app.use((error, req, res, next) => {
    error.status = error.status || 500;
    res.status(error.status);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App on port ${PORT}`));