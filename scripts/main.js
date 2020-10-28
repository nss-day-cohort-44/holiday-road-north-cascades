console.log("Welcome to the main module")
import { useParks, getParks } from "./parks/ParkProvider.js"
getParks()
.then(() => {
const parks = useParks()
console.log(parks)})