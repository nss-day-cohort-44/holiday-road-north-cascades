const eventHub = document.querySelector(".container")

// CREATES AND DISPTCHES NEW CUSTOM EVENT, WHICH IS LISTENED FOR BY ITINERARYLIST.JS
const dispatchStateChangeEvent = () => {
    const itineraryStateChangedEvent = new CustomEvent("itineraryStateChanged")

    eventHub.dispatchEvent(itineraryStateChangedEvent)
    console.log("itinerarySTATE" , itineraryStateChangedEvent)
}
// DEFINE EMPTY STRING TO HOLD PARSED INFO FROM DB.JSON API
let itineraries = "" //WHY IS THIS A STRING INSTEAD OF AN ARRAY?

// MAKES A USABLE COPY OF ITINERARIES ARRAY  -- USED IN ITINERARYLIST.JS
export const useItineraries = () => {
    return itineraries.slice()
}
// FETCHES DATA FROM DB.JSON (LOCAL API), CONVERTS TO JSON (PARSES) AND EXPORTS FUNCTION FOR ITINERARYLIST.JS TO USE TO RENDER ITINERARY OBJECTS
export const getItineraries = () => {
    return fetch('http://localhost:8088/itineraries')
        .then(response => response.json())
        
        .then(parsedItinerary => {
            // console.log("parsed" , parsedItinerary)
            itineraries = parsedItinerary
        })
        
        // console.log("itin in GET" , itineraries)
}

// Where is any of this coming from?
// CALLED ON ITINERARYFORM.JS -- SENDS THE NEW ITINERARY OBJECT TO THE DB.JSON, THEN CALLS GETITINERARIES TO RETRIEVE THE UPDATED DATA LIST, THEN CALLS FUNCTION TO DISPACTCH NEW CUSTOM EVENT
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