import { useParks } from "../parks/ParkProvider.js"
import { useAttractions } from "../attractions/AttractionProvider.js"
import { useEateries } from "../eateries/EateryProvider.js"
import { saveItinerary } from "./ItineraryProvider.js"
const contentTarget = document.querySelector(".itinerary__button")
const eventHub = document.querySelector(".container")


let chosenPark = ""
let chosenAttraction = ""
let chosenEatery = ""

export const renderSaveItineraryButton = () => {
    return contentTarget.innerHTML = `
    <button id="saveItinerary" disabled>Save Itinerary</button>
    `
}


eventHub.addEventListener("click", event => {
    if (event.target.id === "saveItinerary") {
        console.log("heard save itin click")
        
            const newItineraryObject = {
                parkName: chosenPark.parkName,
                attractionName: chosenAttraction.attractionName,
                eateryName: chosenEatery.eateryName
            }
            saveItinerary(newItineraryObject)
        }
    })

const checkSaveStatus = () => {
    const saveButton = document.querySelector("#saveItinerary")
console.log("save button", saveButton)
    if (chosenPark === "" || chosenAttraction === "" || chosenEatery === "") {
        saveButton.disabled = true
    }
    else {
        saveButton.disabled = false
}
}

// PARK LISTENER
eventHub.addEventListener("parkChosen", event => {

    if (event.detail.parkThatWasChosen !== 0) {
        const parksCollection = useParks()

        const parkSelected = parksCollection.find(parkObj => {

            return parkObj.id === event.detail.parkThatWasChosen
        })
        // console.log("Park Event" , parkSelected)
        chosenPark = {
            parkName: `${parkSelected.fullName}`
        }
        checkSaveStatus()
        console.log("stored chosenPark:", chosenPark)
    }
})

eventHub.addEventListener("attractionChosen", event => {
    if (event.detail.attractionThatWasChosen !== 0) {
        const attractionsCollection = useAttractions()
        //find the attraction chosen
        const attractionSelected = attractionsCollection.find(attractionObj => {
            return attractionObj.id === parseInt(event.detail.attractionThatWasChosen)
        })
        chosenAttraction = {
            attractionName: `${attractionSelected.name}`
        }
        checkSaveStatus()
        console.log("stored chosenAttraction:", chosenAttraction);
    }
})

eventHub.addEventListener("eateryChosen", event => {

    if (event.detail.eateryThatWasChosen !== 0) {
        const eateriesCollection = useEateries()
        // console.log(eateriesCollection)

        const eaterySelected = eateriesCollection.find(eateryObj => {

            return eateryObj.id === parseInt(event.detail.eateryThatWasChosen)
        })
        chosenEatery = {
            eateryName: `${eaterySelected.businessName}`
        }
        checkSaveStatus()
        console.log("stored chosenEatery:", chosenEatery);
    }
})

















// document.querySelectorAll('.filter').forEach(item => {
//     item.addEventListener('change', event => {
//       if ()
//     })
//   })



// [document.querySelector('.a-class'), document.querySelector('.another-class')].forEach(item => {
//     item.addEventListener('click', event => {
//       //handle click
//     })
//   })