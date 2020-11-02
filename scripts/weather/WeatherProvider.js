import apiKeys from "../Settings.js" 


let weather = []

export const useWeather = () => {
    return weather.slice()
}


// console.log("API Key Check:", apiKeys)

export const getWeather = (postalCode) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${postalCode}&units=imperial&appid=${apiKeys.weatherKey}`)
    .then(response => response.json())
    .then(
        parsedWeather => {
            weather = parsedWeather.list
            // console.log("Weather Check:", weather)
        }
    )
}
// console.log("Weather Type Check:", weather)

