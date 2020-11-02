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
        const zip = parkSelected.addresses[0].postalCode
        // render(parkSelected)
        // console.log("zip found:", zip)
        getWeather(zip)
    }
})
