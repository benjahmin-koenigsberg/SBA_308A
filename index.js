import { getFruitNames } from "./getFruitNames.js"
import { getPhoto } from "./getPhoto.js"
import { getNutrients } from "./getNutrients.js"




//DOM elements
const nutrientHeader = document.getElementById('nutrients')
const fruitSelect = document.getElementById('fruitSelect')

//event handler
fruitSelect.addEventListener('change', (e) => {
    getPhoto(e)
    getNutrients(e)
 })

window.addEventListener('load', ()=>{
    nutrientHeader.innerText = ''
    getFruitNames()
})
