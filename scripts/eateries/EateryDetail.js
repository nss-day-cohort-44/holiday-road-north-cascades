import { useEateries } from "./EateryProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("eateryDetailClicked", (event) => {
    const arrayOfEateries = useEateries()

    const foundEatery = arrayOfEateries.find((eateryObj) => {
        return eateryObj.id === parseInt(event.detail.eateryId)
        
    })
    console.log("hey we found an eatery", foundEatery)
    render(foundEatery)
})

const render = (eateryObj) => {
    const contentTarget = document.querySelector(".eateryContainer")

    contentTarget.innerHTML += `
    <div class="description">
        ${eateryObj.description}
        </div>
    `
}