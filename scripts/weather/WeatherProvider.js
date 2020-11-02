import apiKeys from "../Settings.js" 


let weather = []

export const useWeather = () => {
    return weather.slice(0, 5)
}


// console.log("API Key Check:", apiKeys)

export const getWeather = (lat, lon) => {
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${apiKeys.weatherKey}`)
    .then(response => response.json())
    .then(
        parsedWeather => {
            weather = parsedWeather.daily
            console.log("Weather Check:", weather)
        }
    )
}
// console.log("Weather Type Check:", weather)

