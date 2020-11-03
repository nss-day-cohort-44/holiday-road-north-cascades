import { Weather } from "./WeatherHTML.js"
import { getWeather, useWeather } from "./WeatherProvider.js"
import { useParks } from "../parks/ParkProvider.js"

const contentContainer = document.querySelector(".weatherContainer")
const eventHub = document.querySelector(".container")

/* LISTENS FOR CUSTOM EVENT FROM PARK SELECT, FINDS THE CHOSEN PARK, 
ACCESSES THE LATITUDE AND LONGITUDE PROPERTIES OF CHOSEN PARK AND ASSIGNS TO VARIABLES,
THEN PASSES THEM AS ARGUMENTS THROUGH THE GETWEATHER FUNCTION, 
SAVES THEM IN A USABLE FORMAT TO THEN BE USED AS AN ARUGMENT TO CALL RENDER FUNCTION */
eventHub.addEventListener("parkChosen", event => {
    if(event.detail.parkThatWasChosen !==0) {
        const parksCollection = useParks()
        const parkSelected = parksCollection.find(parkObj => {
            return parkObj.id === event.detail.parkThatWasChosen
        }
        )
        const lat = parkSelected.latitude
        const lon = parkSelected.longitude
        // render(parkSelected)
        console.log("latlon found:", lat, lon)
        getWeather(lat, lon)
        .then(() => {
            const forecast = useWeather()
            console.log(forecast)
            render(forecast)
        }) 
    }
})
// ITERATES SAVED FORECAST ARRAY AND CALLS WEATHER FUNCTION FOR EACH OBJECT, THEN RENDERS TO THE DOM
const render = (forecastArray)=> {
    let forecastHTMLRepresentations = ""
    for(const weather of forecastArray) {
        forecastHTMLRepresentations += Weather(weather)
    }
    contentContainer.innerHTML = `
        ${forecastHTMLRepresentations}
    `
}