// IMPORT AND NAME API KEYS FROM THE EXPORT DEFAULT FROM SETTINGS.JS
import apiKeys from "../Settings.js" 

// DEFINE EMPTY ARRAY TO HOLD PARSED INFO FROM WEATHER API
let weather = []

/* MAKES A USABLE COPY OF PARKS ARRAY  
USED IN PARKLIST.JS, PARKDETAIL.JS AND PARKSELECT.JS */
export const useWeather = () => {
    return weather.slice(0, 5)
}


// console.log("API Key Check:", apiKeys)
/* FETCHES DATA FROM WEATHER API, CONVERTS TO JSON (PARSES) 
AND EXPORTS FUNCTION FOR WEATHERLIST TO POPULATE AND RENDER FORECAST TO WEATHER CONTAINER  
PARAMETERS ARE LATITUDE AND LONGITUDE */
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

