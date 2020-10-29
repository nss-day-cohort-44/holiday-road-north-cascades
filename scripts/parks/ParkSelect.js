const ContentTarget = document.querySelector(".filters__park")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", event => {
    if(event.target.id === "parkSelect") {
        const customEvent = new CustomEvent("parkChosen", {
            detail: {       
//Not sure if we need parseInt here since ID doesn't appear to be an integer         
                parkThatWasChosen: (event.target.value) 
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})