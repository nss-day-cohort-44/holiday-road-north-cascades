// IMPORT AND NAME API KEYS FROM THE EXPORT DEFAULT FROM SETTINGS.JS
import apiKeys from "../Settings.js" 

// DEFINE EMPTY ARRAY TO HOLD PARSED INFO FROM PARK API
let parks = []

// MAKES A USABLE COPY OF PARKS ARRAY  -- USED IN PARKLIST.JS, PARKDETAIL.JS AND PARKSELECT.JS
export const useParks = () => {
    return parks.slice()
}


// console.log(apiKeys)

// FETCHES DATA FROM NPS API, CONVERTS TO JSON (PARSES) AND EXPORTS FUNCTION FOR PARK SELECT TO POPULATE AND RENDER DROPDOWN
export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?&api_key=${apiKeys.npsKey}`)
    .then(response => response.json())
    .then(
        parsedParks => {
            // console.log(parsedParks)
            parks = parsedParks.data
        }
    )
}
// console.log(parks)