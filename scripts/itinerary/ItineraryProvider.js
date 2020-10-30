const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const itineraryStateChangedEvent = new CustomEvent("itineraryStateChanged")

    eventHub.dispatchEvent(itineraryStateChangedEvent)
    console.log("itinerarySTATE" , itineraryStateChangedEvent)
}

let itineraries = ""

export const useItineraries = () => {
    return itineraries.slice()
}

export const getItineraries = () => {
    return fetch('http://localhost:8088/itineraries')
        .then(response => response.json())
        
        .then(parsedItinerary => {
            console.log("parsed" , parsedItinerary)
            itineraries = parsedItinerary
        })
        
        // console.log("itin in GET" , itineraries)
}



// Where is any of this coming from?
export const saveItinerary = itinerary => {
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinerary)
    })
    .then(getItineraries)
    .then(dispatchStateChangeEvent)
    
}