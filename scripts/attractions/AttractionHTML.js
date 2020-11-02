const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".attractionContainer")


export const AttractionPlaceholderHTML = () => {
   contentTarget.innerHTML = `
    
        <h3>Attraction:</h3>
        <img class="preview--image" src="../images/t-rex-3488531__340_pixabay.jpg" alt="large statue of a t-rex">
        `
}

export const ChosenAttractionHTML = (attractionObj) => {
    return  `
        <div id="attraction-${attractionObj.id}" class="card">
            <h3>Attraction:</h3>
            <h3 class="attraction__name">${attractionObj.name}</h3>
            <button id="attractionDetail--${attractionObj.id}">More Info</button>
        </div>
        `
}

eventHub.addEventListener("click", event => {
    const [prefix, id] = event.target.id.split("--")
    if (prefix === "attractionDetail") {
        const customEvent = new CustomEvent("attractionDetailClicked", {
            detail: {
                attractionId: id
            }
        })
        console.log("click" , event)
        eventHub.dispatchEvent(customEvent)
    }
})