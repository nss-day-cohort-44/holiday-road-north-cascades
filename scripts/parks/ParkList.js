import { ChosenParkHTML } from "./ParkHTML.js"
import { useParks } from "./ParkProvider.js"


const contentContainer = document.querySelector(".parkContainer")
const eventHub = document.querySelector(".container")

// LISTENS FOR PARK TO BE SELECTED FROM DROPDOWN, USES DETAIL SENT IN CUSTOM EVENT TO FIND THE PARK THAT WAS CHOSEN AND CALLS RENDER FUNCTION USING THAT PARK INFO 
eventHub.addEventListener("parkChosen", event => {

    if(event.detail.parkThatWasChosen !==0) {
        const parksCollection = useParks()

        const parkSelected = parksCollection.find(parkObj => {
            
            return parkObj.id === event.detail.parkThatWasChosen
        })
        console.log("Park Event" , parkSelected)
        render(parkSelected)
    }
})

// CREATES HTML REPRESENTATION OF PARK THAT WAS CHOSEN AND RENDERS TO THE DOM
const render = (selectedPark) => {
    
    const parkHTMLRepresentation = ChosenParkHTML(selectedPark)

    contentContainer.innerHTML = `
     <div>${parkHTMLRepresentation}</div>`
    
}


