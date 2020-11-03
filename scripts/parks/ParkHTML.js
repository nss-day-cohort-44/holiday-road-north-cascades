const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".parkContainer")


export const ParkPlaceholderHTML = () => {
   contentTarget.innerHTML = `
    
        <h3>National Park:</h3>
        <img class="preview--image" src="../images/redwood-national-park-1587301_960_720_pixabay.jpg" alt="a road in Redwood National Park">
        `
}

export const ChosenParkHTML = (parkObj) => {
    return  `
        <div id="park-${parkObj.id}" class="card">
            <h3>National Park:</h3>
            <h3 class="park__name">${parkObj.fullName}</h3>
            <button id="parkDetail--${parkObj.id}">More Info</button>
            <div class="park__detail description"></div>
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
        console.log("click" , event)
        eventHub.dispatchEvent(customEvent)
    }
})