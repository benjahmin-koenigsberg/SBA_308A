


 async function getFruitData() {

     //Fruit APIs
     
     // const FRUIT_URL = "https://tropicalfruitandveg.com/api/tfvjsonapi.php?search=berry";
     const FRUIT_URL = "https://www.fruityvice.com/api/fruit/all"
     const FRUIT_URL2 = "https://tropicalfruitandveg.com/api/tfvxmlapi.php?search=all"

    const response = await axios.get(FRUIT_URL)
    const fruitData = await response.data
    console.log(fruitData);
    fruitData.forEach(element => {
        //document.getElementById('app').innerHTML +=`<p>${element.name}</p>`
        fruitData.forEach((fruit) => {
            const fruitEl = document.createElement("option");
            fruitEl.setAttribute("value", fruit.name);
            fruitEl.innerText = fruit.name
            document.getElementById('fruitSelect').append(fruitEl);
        });
    });
};

export {getFruitData}
