import { getItineraries , useItineraries } from "./ItineraryProvider.js"
import { Itinerary } from "./ItineraryHTML.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".itineraryContainer")

eventHub.addEventListener("itineraryStateChanged", () => ItinerariesList())


// console.log(getItineraries())

export const ItinerariesList = () => {

    
    getItineraries()
    .then(() => {
        const itinerariesArray = useItineraries()
        render(itinerariesArray)
        
        console.log("itineraryArray" , itinerariesArray)

    })
}

const render = (itineraries) => {


    contentTarget.innerHTML = `
   
    ${itineraries.map(
        itineraryObj => {
      return Itinerary(itineraryObj)
    }
    ).join("")
}` 
}