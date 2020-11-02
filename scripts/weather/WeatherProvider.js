import apiKeys from "../Settings.js" 


let weather = []

export const useWeather = () => {
    return weather.slice()
}


console.log("API Key Check:", apiKeys)

export const getWeather = () => {
    return fetch(`api.openweathermap.org/data/2.5/forecast?zip=${postalCode}&appid=${apiKeys.weatherKey}`)
    .then(response => response.json())
    .then(
        parsedWeather => {
            console.log("Parsed Weather Check:", parsedWeather)
            weather = parsedWeather.data
        }
    )
}
console.log("Weather Array Check:", weather)

