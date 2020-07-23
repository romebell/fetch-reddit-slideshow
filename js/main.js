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
            }
        )
        .catch(function(error){
            console.log('Error', error)
        })
    })
    stopButton.addEventListener('click', event =>{
        let slideShow = document.querySelector('.slideshow')
        goContainer.removeChild(stopButton)
        header.appendChild(title)
        header.appendChild(instructions)
        goContainer.appendChild(button)
        body.removeChild(slideShow)

    })
})


function makeImageElement(data){
    const slideShow = document.createElement('div')
    slideShow.classList.add('slideshow')

    for (let i = 0; i < 20;i++){
        let object = data.data.children[i]
        let image = object.data.thumbnail
        let newImage = document.createElement('img')
        newImage.classList.add('img')

        if (image === 'image' || image === 'self' || image === 'default' || image === 'nsfw'){
            // newImage.src = 'https://picsum.photos/140/140'
        } else {
            newImage.src = image
            slideShow.appendChild(newImage)
            pushToPage(slideShow)
        }
    } 
}

function pushToPage(newImage){
    body.appendChild(newImage)
}