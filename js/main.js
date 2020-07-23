const body = document.querySelector('body')
const header = document.querySelector('.title')
const button = document.querySelector('button')
const goContainer = document.querySelector('#go')
const title = document.querySelector('h1')
const instructions = document.querySelector('h2')
const input = document.querySelector('input')
const stopButton = document.createElement('button')
stopButton.setAttribute('type', 'button')
stopButton.textContent = 'Forgot My Sign'
let n = 0


document.addEventListener('DOMContentLoaded', function() {
    button.addEventListener('click', event => {

        const input = document.querySelector('input').value
        let inputProper = input.split(' ').join('+')
        let requestURL = 'https://www.reddit.com/search.json?q=' + inputProper
        
        header.removeChild(title)
        header.removeChild(instructions)
        goContainer.removeChild(button)

        goContainer.appendChild(stopButton)
    
        fetch(requestURL)
        .then(response => {
            return response.json()
        })
        .then(data => {
            makeImageElement(data)
            cycleImages()
            }
        )
        .catch(function(error){
            console.log('Error', error)
        })
    })
    stopButton.addEventListener('click', event =>{
        let slideShow = document.querySelector('.carousel slide')
        goContainer.removeChild(stopButton)
        header.appendChild(title)
        header.appendChild(instructions)
        goContainer.appendChild(button)
        body.removeChild(slideShow)

    })
})


function makeImageElement(data){
    const slideShow = document.createElement('div')
    slideShow.setAttribute('class', 'carousel slide')
    slideShow.setAttribute('id', 'carouselExampleSlidesOnly')
    slideShow.setAttribute('data-ride', 'carousel')
    const innerSlide = document.createElement('div')
    innerSlide.classList.add('carousel-inner')
    slideShow.appendChild(innerSlide)

    body.appendChild(slideShow)

    for (let i = 0; i < 20; i++){
        let object = data.data.children[i]
        let image = object.data.thumbnail

        if (i === 0) {
            const item = document.createElement('div')
            innerSlide.appendChild(item)
            item.setAttribute('class', 'carousel-item active')
            let newImage = document.createElement('img')
            newImage.setAttribute('class', 'd-block w-100')
            newImage.setAttribute('alt', '...')
            checkBlanks(image, newImage, item)
        } else {
            const item = document.createElement('div')
            innerSlide.appendChild(item)
            item.classList.add('carousel-item')
            let newImage = document.createElement('img')
            newImage.setAttribute('class', 'd-block w-100')
            newImage.setAttribute('alt', '...')
            checkBlanks(image, newImage, item)
        }

        function checkBlanks(image, newImage, item) {if (image.includes('image') || image.includes('self') || image.includes('default') || image.includes('nsfw')){
            newImage.src = 'https://picsum.photos/100/100'
        } else {
            newImage.src = image
            item.appendChild(newImage)
        }}
        
    } 
}
function cycleImages() {
    let n = 0
    while(n < 20) {
    const carousel = document.querySelector('.carousel-inner').childNodes
    carousel[n+1].setAttribute('class', 'carousel-item active')
    carousel[n].setAttribute('class', 'carousel-item')
    setTimeout(n++, 5000)
    }
    // console.log(carousel)
}

