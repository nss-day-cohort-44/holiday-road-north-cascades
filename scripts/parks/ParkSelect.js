import { getParks, useParks } from "./ParkProvider.js"

const ContentTarget = document.querySelector(".filters__park")
const eventHub = document.querySelector(".container")
// console.log("eventHub:", eventHub)

// LISTENS FOR A PARK TO BE SELECTED FROM DROPDOWN, THEN DISPATCHES CUSTOM EVENT
// LISTENED FOR BY PARKLIST.JS, WEATHERLIST.JS AND ITINERARYFORM.JS
eventHub.addEventListener("change", event => {
    if (event.target.id === "parkSelect") {
        // console.log("park chosen change:", event)
        const customEvent = new CustomEvent("parkChosen", {
            detail: {
                //Not sure if we need parseInt here since ID doesn't appear to be an integer         
                parkThatWasChosen: (event.target.value)
                // console.log("park that was chosen:", parkThatWasChosen)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})
// CALLED ON MAIN.JS - GETS PARKS DATA, MAKE A USABLE ARRAY AND CALL THE RENDER FUNCTION USING THAT DATA, WHICH CREATES DROPDOWN ON THE DOM
export const ParkSelect = () => {
    getParks()
        .then(() => {
            const parks = useParks()
            // console.log("parks:", parks)
            render(parks)
        }
        )
}
// TAKES PARK INFORMATION AND CREATES HTML REPRESENTATIONS FOR PARK DROPDOWN MENU
const render = parksCollection => {
    ContentTarget.innerHTML = `
    <select class="dropdown" id="parkSelect">
        <option value="0">Select A Park</option>
        ${parksCollection.map(
            parksObj => {
                return `<option value="${parksObj.id}">${parksObj.fullName}</option>`
            }
        ).join("")
    }
        </select>
    `
}