export const Weather = (weatherObj) => {
    return `
        <div class="weatherCard">
           
            <h3>Low: ${weatherObj.temp.min}</h3>
            <h3>High: ${weatherObj.temp.max}</h3>
           
                
        </div>`
}