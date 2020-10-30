const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".eateryContainer")


export const EateryPlaceholderHTML = () => {
   contentTarget.innerHTML = `
    
        <h3>Eatery:</h3>
        <img src="" alt="image will go here">
        `
}

export const ChosenEateryHTML = (eateryObj) => {
    return  `
        <div id="eatery-${eateryObj.id}" class="card">
            <h3>Eatery:</h3>
            <h3 class="eatery__name">${eateryObj.businessName}</h3>
            <button id="eateryDetail--${eateryObj.id}">More Info</button>
        </div>
        `
}

eventHub.addEventListener("click", event => {
    const [prefix, id] = event.target.id.split("--")
    if (prefix === "eateryDetail") {
        console.log("event from eatery detail button click:", event)
        const customEvent = new CustomEvent("eateryDetailClicked", {
            detail: {
                eateryId: id
            }
        })
        console.log("click" , event)
        eventHub.dispatchEvent(customEvent)
    }
})