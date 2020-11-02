import { ChosenParkHTML, ParkPlaceholderHTML } from "./parks/ParkHTML.js"
import { ChosenAttractionHTML, AttractionPlaceholderHTML } from "./attractions/AttractionHTML.js"
import { ChosenEateryHTML, EateryPlaceholderHTML } from "./eateries/EateryHTML.js"


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



ParkSelect()
ParkPlaceholderHTML()
AttractionSelect()
AttractionPlaceholderHTML()
EaterySelect()
EateryPlaceholderHTML()

ItinerariesList()

renderSaveItineraryButton()
