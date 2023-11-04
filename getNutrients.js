
//

async function getFruitTextData(e) {

    const nutrientHeader = document.getElementById('nutrients')
    const ul = document.getElementById('nutrientSpot')

    e.preventDefault()
    nutrientHeader.innerText = 'Nutrients'
    const api_key = '0n6poLJ5xOaWYFtZL2XQLTviEdlGn95Jec7E3eKh'
    const fruitTextUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${api_key}&query=${e.target.value}`
    const response = await axios.get(fruitTextUrl)
    const data = await response.data
    ul.innerHTML = ''
    console.log(data)
    //const nutrients = data.foods[0].foodNutrients;
    const nutrients = data.foods[0].foodNutrients.slice(0, 10)

    console.log(nutrients)

    const colors = ['list-group-item-primary', 'list-group-item-secondary', 'list-group-item-success', 'list-group-item-danger', 'list-group-item-warning', 'list-group-item-info', 'list-group-item-light', 'list-group-item-dark']

    nutrients.forEach((fruit) => {
        console.log(fruit)
        console.log(fruit.nutrientName)
        const li = document.createElement('li')
        li.classList.add('list-group-item', colors[Math.floor(Math.random() * colors.length)])
        li.innerText = `${fruit.nutrientName} - ${fruit.nutrientNumber} ${fruit.unitName}`;
        ul.append(li)

    })
}

export {getFruitTextData}
