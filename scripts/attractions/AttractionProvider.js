 

let attractions = []

export const useAttractions = () => {
    return parks.slice()
}




export const getAttractions = () => {
    return fetch(`http://holidayroad.nss.team/bizarreries`)
    .then(response => response.json())
    .then(
        parsedAttractions => {
            // console.log(parsedParks)
            attractions = parsedAttractions
        }
    )
}

console.log("API check" , attractions)