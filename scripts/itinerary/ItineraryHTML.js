export const Itinerary = (itineraryObj) => {
    return `
        <div class="itineraryCard">
           
            <h3>Park: ${itineraryObj.parkName}</h3>
            <h3>Attraction: ${itineraryObj.attractionName}</h3>
                <h3>Eatery: ${itineraryObj.eateryName}</h3>
                
        </div>`
}