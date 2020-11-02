//renders select HTML element for all eateries

import { getEateries, useEateries } from "./EateryProvider.js"

const ContentTarget = document.querySelector(".filters__eatery")
const eventHub = document.querySelector(".container")

//listen for change event
eventHub.addEventListener("change", event => {
    //only do this if 'eaterySelect' element was changed
    if (event.target.id === "eaterySelect") {
        // console.log("eatery chosen change:", event)
        //create and name custom event
        const customEvent = new CustomEvent("eateryChosen", {
            detail: {
                eateryThatWasChosen: (event.target.value)
            }
        })
        // console.log("eatery that was chosen:", event.target.value)
        //dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const EaterySelect = () => {
    getEateries()
    .then(() => {
        const eateries = useEateries()
        //console.log("eateries:", eateries)
        render(eateries)
    })
}

const render = eateriesCollection => {
    ContentTarget.innerHTML = `
    <select class="dropdown" id= "eaterySelect">
    <option value="0">Select an Eatery</option>
    ${eateriesCollection.map(
        eateriesObj => {
            return `<option value="${eateriesObj.id}">${eateriesObj.businessName}</option>`
        }
    )}
    </select>
    `
}