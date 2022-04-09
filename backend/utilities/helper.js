const axios = require("axios");
const API_key = '9718ad7fd433f1c449b113b50a59560c';

const geocode = async function (city) {
    try {
        const { data } = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}`)

        if (data.length === 0) return { cod: 404, message: 'City not found' }

        return data
    } catch (error) {
        console.log(error.response.data);

        return error.response.data;
    }
}

const getWeather = async function (lat, lon) {
    try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_key}`)

        if (data.length === 0) return { cod: 404, message: 'Weather data not found' }

        return data
    } catch (error) {
        console.log(error.response.data);

        return error.response.data;
    }
}

module.exports = {
    geocode,
    getWeather
}
