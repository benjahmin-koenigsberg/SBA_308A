import { getFruitNames } from "./getFruitNames.js"
import { getPhoto } from "./getPhoto.js"
import { getNutrients } from "./getNutrients.js"




//DOM elements
const nutrientHeader = document.getElementById('nutrients')
const fruitSelect = document.getElementById('fruitSelect')
const searchBtn = document.getElementById('searchBtn')

//event handler

searchBtn.addEventListener('click', (e) => {
    getPhoto(e)
    getNutrients(e)
})

//event handler
fruitSelect.addEventListener('change', (e) => {
    getPhoto(e)
    getNutrients(e)
 })

window.addEventListener('load', ()=>{
    nutrientHeader.innerText = ''
    getFruitNames()
})
