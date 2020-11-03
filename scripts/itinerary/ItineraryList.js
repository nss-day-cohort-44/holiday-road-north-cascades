import { getItineraries , useItineraries } from "./ItineraryProvider.js"
import { Itinerary } from "./ItineraryHTML.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".itineraryContainer")

// LISTENS FOR CUSTOM EVENT FROM ITINERARY PROVIDER, THEN CALLS ITINERARIES LIST TO RENDER THE UPDATED LIST OF SAVED ITINERARY ITEMS
eventHub.addEventListener("itineraryStateChanged", () => ItinerariesList())
// console.log(getItineraries())

// CALLED ON MAIN.JS TO RENDER THE SAVED ITINERARIES TO THE DOM
// CALLED IN THE ABOVE EVENTLISTENER TO RENDER THE UPDATED LIST ONCE A NEW ITEM HAS BEEN SAVED
// GETS THE LIST OF ITINERARIES, COPIES THEM INTO USABLE FORMAT, THEN CALLS THE RENDER FUNCTION WITH THE USABLE ARRAY AS ARGUMENT
export const ItinerariesList = () => {
    getItineraries()
    .then(() => {
        const itinerariesArray = useItineraries()
        render(itinerariesArray)
        
        // console.log("itineraryArray" , itinerariesArray)

    })
}
// CALLED IN ITINERARIESLIST, TAKES AN ARRAY AS ARGUMENT, CREATES AN HTML REPRESENTATION FOR EACH OBJ IN THE ARRAY AND APPENDS TO THE DOM
const render = (itineraries) => {

    contentTarget.innerHTML = `
   
    ${itineraries.map(
        itineraryObj => {
      return Itinerary(itineraryObj)
    }
    ).join("")
}` 
}