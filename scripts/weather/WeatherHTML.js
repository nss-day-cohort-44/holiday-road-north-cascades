// CALLED BY RENDER ON WEATHERLIST.JS -- CREATES AN HTML REPRESENTATION OF EACH FORECAST OBJ PASSED TO IT
export const Weather = (weatherObj) => {
    return `
        <div class="weatherCard">
           
        <h3>Date: ${new Date(weatherObj.dt).toLocaleDateString('en-US')}</h3>
            <h5>Low: ${weatherObj.temp.min}</h5>
            <h5>High: ${weatherObj.temp.max}</h5>

           
                
        </div>`
}