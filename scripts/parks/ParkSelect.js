import { getParks, useParks } from "./ParkProvider.js"

const ContentTarget = document.querySelector(".filters__park")
const eventHub = document.querySelector(".container")
// console.log("eventHub:", eventHub)

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

export const ParkSelect = () => {
    getParks()
        .then(() => {
            const parks = useParks()
            // console.log("parks:", parks)
            render(parks)
        }
        )
}

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