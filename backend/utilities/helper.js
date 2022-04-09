const axios = require("axios");
const API_key = '9718ad7fd433f1c449b113b50a59560c';

const geocode = async function (city) {
    try {
        const cityGeoData = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}`)
        return cityGeoData.data
    } catch (error) {
        console.log(error);
        return error;
    }
}

const getWeather = async function (lat, lon) {
    try {
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_key}`)
        return weather.data
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = {
    geocode,
    getWeather
}
