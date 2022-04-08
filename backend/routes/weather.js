const express = require('express')
const router = express.Router()
const axios = require("axios");
const cors =require('cors')

router.get('/', cors(), async (req, res) => {

    const lat = '52.377956'
    const long = '4.891711'
    const API_key = '9718ad7fd433f1c449b113b50a59560c';
    try {
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_key}`)
        res.send(weather.data)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

module.exports = router;