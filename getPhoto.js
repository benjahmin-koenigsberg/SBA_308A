const fruitSelect = document.getElementById('fruitSelect')


//pexel api

async function getPhoto(e) {
    e.preventDefault()
    console.log(e.target.value)
    document.getElementById('photoSpot').innerHTML = ''

    // const query = e.target.value;
    const query = fruitSelect.value;


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


export {getPhoto}
