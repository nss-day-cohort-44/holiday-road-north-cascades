import { getAttractions, useAttractions } from "./AttractionProvider.js"

const ContentTarget = document.querySelector(".filters__attraction")
const eventHub = document.querySelector(".container")
// console.log("eventHub:", eventHub)
 
eventHub.addEventListener("change", event => {
    if (event.target.id === "attractionSelect") {
        // console.log("attraction chosen change:", event)
        const customEvent = new CustomEvent("attractionChosen", {
            detail: {
                //Not sure if we need parseInt here since ID doesn't appear to be an integer         
                attractionThatWasChosen: (event.target.value)
                // console.log("attraction that was chosen:", attractionThatWasChosen)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

export const AttractionSelect = () => {
    getAttractions()
        .then(() => {
            const attractions = useAttractions()
            // console.log("attractions:", attractions)
            render(attractions)
        }
        )
}

const render = attractionsCollection => {
    ContentTarget.innerHTML = `
    <select class="dropdown" id="attractionSelect">
        <option value="0">Select An Attraction</option>
        ${attractionsCollection.map(
            attractionObj => {
                return `<option value="${attractionObj.id}">${attractionObj.name} in ${attractionObj.city}, ${attractionObj.state}</option>`
            }
        ).join("")
    }
        </select>
    `
}