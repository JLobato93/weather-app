export default {
    // return every third element from array
    threeHourForecast(array) {
        return array.filter((item, index) => {
            if (index !== 0 && index % 3 === 0 && index < 19)
                return item;
        });
    },

    // extract one property from array of objects
    extractProperty(array, property) {
        let newArray = [];
        array.forEach((item, index) => {
            if (index < 7) newArray.push(this.convertToCelsius(item[property]))
        });
        return newArray;
    },

    // convert temperature from kelvin to celsius
    convertToCelsius(temp) {
        return Math.round(temp - 273.15);
    }
}

String.prototype.getDegreeSymbol = function () {
    if (this === "celsius") {
        return "°C";
    } else if (this === "fahrenheit") {
        return "°F";
    }
}

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}