import { ChosenParkHTML } from "./ParkHTML.js"
import { getParks , useParks } from "./ParkProvider.js"


const contentContainer = document.querySelector(".parkContainer")
const eventHub = document.querySelector(".container")




eventHub.addEventListener("parkChosen", event => {

    if(event.detail.parkThatWasChosen !==0) {
        const parksCollection = useParks()

        const parkSelected = parksCollection.find(parkObj => {
            
            return parkObj.id === event.detail.parkThatWasChosen
        })
        // console.log("Park Event" , parkSelected)
        render(parkSelected)
    }
})

const render = (selectedPark) => {
    
    const parkHTMLRepresentation = ChosenParkHTML(selectedPark)

    contentContainer.innerHTML = `
     <div>${parkHTMLRepresentation}</div>`
    
}


