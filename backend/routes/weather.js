const express = require('express')
const router = express.Router()
const cors = require('cors')
const helper = require('../utilities/helper')

router.get('/', cors(), async (req, res) => {
    const city = req.query.city;
    const cityGeoData = await helper.geocode(city);
    const weather = await helper.getWeather(cityGeoData[0].lat, cityGeoData[0].lon);
    return res.send(weather);

})

module.exports = router;