const cors = require('cors')
const express = require('express');
const weather = require('./routes/weather');
const geocode = require('./routes/geocoding');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(cors());

app.use('/weather',weather)
app.use('/geocode',geocode)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})