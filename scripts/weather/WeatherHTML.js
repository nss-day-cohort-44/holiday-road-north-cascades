export const Weather = (weatherObj) => {
    return `
        <div class="weatherCard">
           
            <h3>Low: ${weatherObj.list.main.temp_min}</h3>
            <h3>High: ${weatherObj.list.main.temp_max}</h3>
           
                
        </div>`
}