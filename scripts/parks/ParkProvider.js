import apiKeys from "../Settings.js" 


let parks = []

export const useParks = () => {
    return parks.slice()
}


console.log(apiKeys)

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?&api_key=${apiKeys.npsKey}`)
    .then(response => response.json())
    .then(
        parsedParks => {
            console.log(parsedParks)
            parks = parsedParks.data
        }
    )
}
// console.log(parks)