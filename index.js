
const ul = document.getElementById('nutrientSpot')
const nutrientHeader = document.getElementById('nutrients')




//Fruit API
// const FRUIT_URL = "https://tropicalfruitandveg.com/api/tfvjsonapi.php?search=berry";
const FRUIT_URL = "https://www.fruityvice.com/api/fruit/all"
const FRUIT_URL2 = "https://tropicalfruitandveg.com/api/tfvxmlapi.php?search=all"

//'https://jsonplaceholder.typicode.com/users';

async function getFruitData() {

    const response = await axios.get(FRUIT_URL)
    const fruitData = await response.data
    console.log(fruitData);
    fruitData.forEach( element => {
        //document.getElementById('app').innerHTML +=`<p>${element.name}</p>`
        fruitData.forEach( (fruit) => {
            const fruitEl = document.createElement("option");
            fruitEl.setAttribute("value", fruit.name);
            fruitEl.innerText = fruit.name
            document.getElementById('fruitSelect').append(fruitEl);
        });
    });
};

const fruitSelect = document.getElementById('fruitSelect')

fruitSelect.addEventListener('change', (e) => {
    getPhoto(e)
    getFruitTextData(e)


 })

async function getPhoto(e) {
    e.preventDefault()
    document.getElementById('photoSpot').innerHTML = ''
    const query = e.target.value;

    const photoReq = await axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
        headers: {
            Authorization: 'XRED6LegsN79wJHnL9al2BepoyiYr3DVV6jyuLlhdXLsfwMuiJ3yzUzO'
        }
    })

    const photo = await photoReq.data
    console.log(photo.photos[0].src.original)
    const img = document.createElement('img')
    img.classList.add('card')
    //console.log(img)
    img.src = photo.photos[0].src.original
    document.getElementById('photoSpot').append(img)
}






//window.addEventListener('load', getPhoto)

getFruitData()
//getPhoto()

async function getFruitTextData(e){
e.preventDefault()

    nutrientHeader.innerText = 'Nutrients'
    const api_key = '0n6poLJ5xOaWYFtZL2XQLTviEdlGn95Jec7E3eKh'
    const fruitTextUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${api_key}&query=${e.target.value}`
    //const fruitSampleUrl = 'https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=Apple'

    const response = await axios.get(fruitTextUrl)
    const data = await response.data
    ul.innerHTML = ''
    console.log(data)
    //const nutrients = data.foods[0].foodNutrients;
    const nutrients = data.foods[0].foodNutrients.slice(0,10)

    console.log(nutrients)

    const colors = ['list-group-item-primary', 'list-group-item-secondary', 'list-group-item-success', 'list-group-item-danger', 'list-group-item-warning', 'list-group-item-info', 'list-group-item-light', 'list-group-item-dark']

    nutrients.forEach( (fruit) =>  {
        console.log(fruit)
        console.log(fruit.nutrientName)
        const li = document.createElement('li')
        li.classList.add('list-group-item', colors[Math.floor(Math.random() * colors.length)] )
        li.innerText = `${fruit.nutrientName} - ${fruit.nutrientNumber} ${fruit.unitName}`;
        ul.append(li)

    } )
    //console.log(data.foods[0].foodNutrients[0].nutrientName);
}


window.addEventListener('load', ()=>{
    nutrientHeader.innerText = ''
})
