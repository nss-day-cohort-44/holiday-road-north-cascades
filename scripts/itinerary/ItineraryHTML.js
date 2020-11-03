// CALLED BY RENDER ON ITINERARYLIST.JS -- CREATES AN HTML REPRESENTATION OF EACH ITINERARY OBJ PASSED TO IT
export const Itinerary = (itineraryObj) => {
    return `
        <div class="itineraryCard">
           
            <h3>Park: ${itineraryObj.parkName}</h3>
            <h3>Attraction: ${itineraryObj.attractionName}</h3>
                <h3>Eatery: ${itineraryObj.eateryName}</h3>
                
        </div>`
}