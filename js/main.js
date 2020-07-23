// Globals
const body = document.querySelector('body')
const header = document.querySelector('.title')
const button = document.querySelector('button')
const goContainer = document.querySelector('#go')
const title = document.querySelector('h1')
const instructions = document.querySelector('h2')
const input = document.querySelector('input')
// const pause = time => new Promise(resolve => setTimeout(resolve, time)) //Attempt to create pause function

// elements to be added
const stopButton = document.createElement('button')
stopButton.setAttribute('type', 'button')
stopButton.setAttribute('class', 'btn btn-outline-danger')
stopButton.textContent = 'Forgot My Sign'


document.addEventListener('DOMContentLoaded', function() {
    // search button click
    button.addEventListener('click', event => {
        // Get input value & replace space with +
        const input = document.querySelector('input').value
        let inputProper = input.split(' ').join('+')
        // insert input into url
        let requestURL = 'https://www.reddit.com/search.json?q=' + inputProper
        
        // remove title and insturctions, replace go button with stop
        header.removeChild(title)
        header.removeChild(instructions)
        goContainer.removeChild(button)
        goContainer.appendChild(stopButton)

        // get data
        fetch(requestURL)
        .then(response => {
            return response.json()
        })
        .then(data => {
            // create elements
            makeImageElement(data)
            // cycle thru classes
            cycleImages()
            }
        )
        .catch(function(error){
            console.log('Error', error)
        })
    })

    // listen for stop button click & reset page
    stopButton.addEventListener('click', event => {
        // let slideShow = document.querySelector('.carousel slide')
        // goContainer.removeChild(stopButton)
        // header.appendChild(title)
        // header.appendChild(instructions)
        // goContainer.appendChild(button)
        // body.removeChild(slideShow)
        location.reload()
    })
})

// make element from bootstrap carousel
function makeImageElement(data){
    const slideShow = document.createElement('div')
    slideShow.setAttribute('class', 'carousel slide')
    slideShow.setAttribute('id', 'carouselExampleSlidesOnly')
    slideShow.setAttribute('data-ride', 'carousel')
    const innerSlide = document.createElement('div')
    innerSlide.classList.add('carousel-inner')
    slideShow.appendChild(innerSlide)

    body.appendChild(slideShow)

    // insert first 10 images
    for (let i = 0; i < 10; i++){
        let object = data.data.children[i]
        let image = object.data.url
        // console.log(image)
        // set first container to be active
        if (i === 0) {
            const item = document.createElement('div')
            innerSlide.appendChild(item)
            item.setAttribute('class', 'carousel-item active')
            let newImage = document.createElement('img')
            newImage.setAttribute('class', 'd-block w-100')
            newImage.setAttribute('alt', '...')
            checkBlanks(image, newImage, item)
            // console.log(newImage)
        } else {
            const item = document.createElement('div')
            innerSlide.appendChild(item)
            item.classList.add('carousel-item')
            let newImage = document.createElement('img')
            newImage.setAttribute('class', 'd-block w-100')
            newImage.setAttribute('alt', '...')
            checkBlanks(image, newImage, item)
            // console.log(newImage)
        }
    } 
}
// check to see if image exists insert placeholder if not
function checkBlanks(image, newImage, item) {
    if (image.includes('.jpg') || image.includes('.png') || image.includes('.gif')){
        newImage.src = image
        item.appendChild(newImage)
    } else {
        newImage.src = 'https://picsum.photos/200/300'
    }}
        
// cycle classes on div containers
function cycleImages() {
    // should run until stop button is clicked
    let n = 0
    setInterval(function() {
        const carousel = document.querySelector('.carousel-inner').children
        carousel[n+1].classList.value = 'carousel-item active'
        carousel[n].classList.value = 'carousel-item'
        n++
        if (n === 9){
            n = 0
            carousel[0].classList.value = 'carousel-item active'
            carousel[9].classList.value = 'carousel-item'
        }
    }, 1000)

}