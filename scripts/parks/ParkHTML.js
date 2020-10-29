const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".parkContainer")


export const ParkPlaceholderHTML = () => {
   contentTarget.innerHTML = `
    
        <h3>National Park:</h3>
        <img src="" alt="image will go here">
        `
}

export const ChosenParkHTML = (parkObj) => {
    return  `
        <div id="park-${parkObj.id}" class="card">
            <h3>National Park:</h3>
            <h3 class="park__name">${parkObj.fullName}</h3>
            <button id="parkDetail--${parkObj.id}">More Info</button>
        </div>
        `
}

eventHub.addEventListener("click", event => {
    const [prefix, id] = event.target.id.split("--")
    if (prefix === "parkDetail") {
        const customEvent = new CustomEvent("parkDetailClicked", {
            detail: {
                parkId: id
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})