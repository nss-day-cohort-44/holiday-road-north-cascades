import { useParks } from "../parks/ParkProvider.js"
import { useAttractions } from "../attractions/AttractionProvider.js"
import { useEateries } from "../eateries/EateryProvider.js"
import { saveItinerary } from "./ItineraryProvider.js"
const contentTarget = document.querySelector(".itinerary__button")
const eventHub = document.querySelector(".container")

// DEFINING EMPTY STRINGS TO HOLD INFO SENT FROM DROPDOWN SELECT/CHANGE EVENTS
let chosenPark = ""
let chosenAttraction = ""
let chosenEatery = ""

// CALLED ON MAIN.JS TO RENDER SAVE ITINERARY BUTTON TO THE DOM
export const renderSaveItineraryButton = () => {
    return contentTarget.innerHTML = `
    <button id="saveItinerary" disabled>Save Itinerary</button>
    `
}

// LISTENS FOR ITINERARY BUTTON CLICK, AND USES THE ASSIGNED VARIABLES TO CREATE A NEW ITINERARY OBJECT AND CALLS THE SAVEITINERARY FUNCTION WITH THE CREATED OBJECT AS ARGUMENT
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
// CALLED IN EACH OF THE BELOW EVENT LISTENERS TO CHECK IF ALL CHANGE EVENTS HAVE OCCURED AND ENABLE SAVE ITINERARY BUTTON ONCE THEY HAVE
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

/* PARK LISTENER
LISTENS FOR THE PARKCHOSEN CUSTOM EVENT FROM PARKSELECT, 
FINDS INFO FOR THE CHOSEN PARK, ASSIGNS A NEW PARK OBJECT AS THE VALUE OF CHOSENPARK, 
THEN CALLS THE CHECKSAVESTATUS FUNCTION */
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
        // console.log("stored chosenPark:", chosenPark)
    }
})
/* ATTRACTION LISTENER
LISTENS FOR THE ATTRACTIONCHOSEN CUSTOM EVENT FROM ATTRACTIONSELECT, 
FINDS INFO FOR THE CHOSEN ATTRACTION, ASSIGNS A NEW ATTRACTION OBJECT AS THE VALUE OF CHOSENATTRACTION, 
THEN CALLS THE CHECKSAVESTATUS FUNCTION */
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
/* EATERY LISTENER
LISTENS FOR THE EATERYCHOSEN CUSTOM EVENT FROM EATERYSELECT, 
FINDS INFO FOR THE CHOSEN EATERY, ASSIGNS A NEW EATERY OBJECT AS THE VALUE OF CHOSENEATERY, 
THEN CALLS THE CHECKSAVESTATUS FUNCTION */
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