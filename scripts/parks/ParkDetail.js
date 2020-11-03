import { useParks } from "./ParkProvider.js"

const eventHub = document.querySelector(".container")

// LISTENS FOR CUSTOM EVENT DISPATCHED BY PARKHTML.JS, FINDS THE PARK INFO AND CALLS RENDER FUNCTION USING PARK INFO AS ARGUMENT
eventHub.addEventListener("parkDetailClicked", (event) => {
    const arrayOfParks = useParks()

    const foundPark = arrayOfParks.find((parkObj) => {
        return parkObj.id === (event.detail.parkId)
        
    })
    // console.log("hey we found a park", foundPark)
    render(foundPark)
})

// APPENDS INNER HTML OF PARK__DETAIL DIV THAT IS CREATED IN CHOSENPARK FUNCTION ON PARKHTML.JS, RENDERS DESCRIPTION OF CHOSEN PARK
const render = (parkObj) => {
    const contentTarget = document.querySelector(".park__detail")

    contentTarget.innerHTML = `
        ${parkObj.description}
    `
}