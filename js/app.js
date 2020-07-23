const body = document.querySelector('body')
const searchBar = document.querySelector('.search-bar')
const submit = document.querySelector('.search-btn')

submit.addEventListener('click', function() {
    searchBar.style.display = 'none'
    const input = document.querySelector('.search-input').value
    console.log(input);

    //need to do somethinf with input 
    fetch('https://www.reddit.com/search.json?q=cats+nsfw:no')
    .then(response => {
        return response.json()
    })
    .then(jsonData => {
        let data = jsonData.data
        let children = data.children
        let pictureUrls = []
        children.forEach(eachChild => {
            let childData = eachChild.data
            let pictureUrl = childData.thumbnail
            if (pictureUrl !== 'self'){
                pictureUrls.push(pictureUrl)
            }        
        })
        
        // Add Carousel from Bootstrap

        const carousel = document.createElement('div')
        carousel.setAttribute('id', 'carouselExampleSlidesOnly')
        carousel.setAttribute('class', 'carousel slide')
        carousel.setAttribute('data-ride', 'carousel')

        const carouselInner = document.createElement('div')
        carouselInner.classList.add('carousel-inner')
        
        const carouselItem = document.createElement('div')
        carouselItem.classList.add('carousel-item')
        carouselItem.classList.add('active')

        const image = document.createElement('img')
        image.src = pictureUrls[0]
        image.setAttribute('class', 'd-block w-100')

        carouselItem.appendChild(image)
        carouselInner.appendChild(carouselItem)
        carousel.appendChild(carouselInner)
        body.appendChild(carousel)
        console.log(body);
    })
})

    
    //console.log(carousel, carouselInner, carouselItem, image);

//     <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//         <img src="..." class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="...">
//     </div>
//   </div>
// </div>

//.carousel('pause')


