import { getFruitData } from "./getFruitNames.js"
import { getPhoto } from "./getPhoto.js"
import { getFruitTextData } from "./getNutrients.js"

//DOM elements
const nutrientHeader = document.getElementById('nutrients')
const fruitSelect = document.getElementById('fruitSelect')

//event handler
fruitSelect.addEventListener('change', (e) => {
    getPhoto(e)
    getFruitTextData(e)
 })

window.addEventListener('load', ()=>{
    nutrientHeader.innerText = ''
    getFruitData()
})
