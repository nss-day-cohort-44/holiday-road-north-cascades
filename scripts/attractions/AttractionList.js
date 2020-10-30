import { ChosenAttractionHTML } from "./AttractionHTML.js"
import { getAttractions, useAttractions } from "./AttractionProvider.js"

const contentContainer = document.querySelector(".attractionContainer")
const eventHub = document.querySelector(".container")

//Listen for custom event in AttractionSelect for selected attraction to put in itinerary preview
eventHub.addEventListener("attractionChosen", event => {
    if(event.detail.attractionThatWasChosen !==0) {
        const attractionsCollection = useAttractions()
        //find the attraction chosen
        const attractionSelected = attractionsCollection.find(attractionObj => {
            return attractionObj.id === parseInt(event.detail.attractionThatWasChosen)
        })
        //invoke render and pass in chosen attraction
        render(attractionSelected)
    }
})

const render = (selectedAttraction) => {

    const attractionHTMLRepresentation = ChosenAttractionHTML(selectedAttraction)

    contentContainer.innerHTML = `
    <div>${attractionHTMLRepresentation}</div>
    `
}