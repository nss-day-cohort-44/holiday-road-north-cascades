import { useParks } from "./ParkProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("parkDetailClicked", (event) => {
    const arrayOfParks = useParks()

    const foundPark = arrayOfParks.find((parkObj) => {
        return parkObj.id === (event.detail.parkId)
        
    })
    console.log("hey we found a park", foundPark)
    render(foundPark)
})

const render = (parkObj) => {
    const contentTarget = document.querySelector(".parkContainer")

    contentTarget.innerHTML += `
    <div class="description">
        ${parkObj.description}
        </div>
    `
}