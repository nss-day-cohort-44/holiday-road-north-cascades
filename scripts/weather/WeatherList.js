import { Weather } from "./WeatherHTML.js"
import { getWeather, useWeather } from "./WeatherProvider.js"
import { useParks } from "../parks/ParkProvider.js"

const contentContainer = document.querySelector(".weatherContainer")
const eventHub = document.querySelector(".container")

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

const render = (forecastArray)=> {
    let forecastHTMLRepresentations = ""
    for(const weather of forecastArray) {
        forecastHTMLRepresentations += Weather(weather)
    }
    contentContainer.innerHTML = `
        ${forecastHTMLRepresentations}
    `
}