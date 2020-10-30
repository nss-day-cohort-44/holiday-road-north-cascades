import { useAttractions } from "./AttractionProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("attractionDetailClicked", (event) => {
    const arrayOfAttractions = useAttractions()

    const foundAttraction = arrayOfAttractions.find((attractionObj) => {
        return attractionObj.id === (parseInt(event.detail.attractionId))
        
    })
    console.log("hey we found an attraction", foundAttraction)
    render(foundAttraction)
})

const render = (attractionObj) => {
    const contentTarget = document.querySelector(".attractionContainer")

    contentTarget.innerHTML += `
    <div class="description">
        ${attractionObj.description}
        </div>
    `
}