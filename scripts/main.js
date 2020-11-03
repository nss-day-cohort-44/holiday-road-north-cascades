import { ParkPlaceholderHTML } from "./parks/ParkHTML.js"
import { AttractionPlaceholderHTML } from "./attractions/AttractionHTML.js"
import { EateryPlaceholderHTML } from "./eateries/EateryHTML.js"


import { ParkSelect } from "./parks/ParkSelect.js"
import { AttractionSelect } from "./attractions/AttractionSelect.js"
import { EaterySelect } from "./eateries/EaterySelect.js"

import "./parks/ParkList.js"
import "./parks/ParkDetail.js"
import "./attractions/AttractionList.js"
import "./attractions/AttractionDetail.js"
import "./eateries/EateryList.js"
import "./eateries/EateryDetail.js"
import { ItinerariesList } from "./itinerary/ItineraryList.js"
import { renderSaveItineraryButton } from "./itinerary/ItineraryForm.js"
// import { Weather } from "./weather/WeatherHTML.js"
// import { getWeather } from "./weather/WeatherProvider.js"
import "./weather/WeatherList.js"

// CALLS FUNCTIONS TO RENDER AND POPULATE THE DROPDOWNS
ParkSelect()
AttractionSelect()
EaterySelect()
// CALLS FUNCTIONS TO RENDER PLACEHOLDER CONTENT TO ITINERARY PREVIEW SECTION BEFORE DROPDOWN SELECTIONS ARE MADE
ParkPlaceholderHTML()
AttractionPlaceholderHTML()
EateryPlaceholderHTML()
// CALLS FUNCTION TO RENDER SAVED ITINERARY OBJECTS
ItinerariesList()
// CALLS FUNCTION TO RENDER SAVE ITINERARY BUTTON UPON PAGE LOAD
renderSaveItineraryButton()


// getWeather(37206)
// .then(() => weather=useWeather())
// .then

// Weather()
// weatherList()

