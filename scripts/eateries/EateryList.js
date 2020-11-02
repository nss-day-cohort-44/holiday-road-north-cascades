import { ChosenEateryHTML } from "./EateryHTML.js"
import { getEateries , useEateries } from "./EateryProvider.js"


const contentContainer = document.querySelector(".eateryContainer")
const eventHub = document.querySelector(".container")




eventHub.addEventListener("eateryChosen", event => {

    if(event.detail.eateryThatWasChosen !==0) {
        const eateriesCollection = useEateries()
        // console.log(eateriesCollection)

        const eaterySelected = eateriesCollection.find(eateryObj => {
            
            return eateryObj.id === parseInt(event.detail.eateryThatWasChosen)
        })
        // console.log("Park Event" , parkSelected)
        render(eaterySelected)
    }
})

const render = (selectedEatery) => {
    
    const eateryHTMLRepresentation = ChosenEateryHTML(selectedEatery)

    contentContainer.innerHTML = `
     <div>${eateryHTMLRepresentation}</div>`
    
}


