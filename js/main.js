const body = document.querySelector('body')
const button = document.querySelector('button')
const title = document.querySelector('h1')
const instructions = document.querySelector('h2')
const input = document.querySelector('input')
const stopButton = document.createElement('button')
stopButton.classList


document.addEventListener('DOMContentLoaded', function() {
    button.addEventListener('click', event => {

        const input = document.querySelector('input').value
        let inputProper = input.split(' ').join('+')
        let requestURL = 'https://www.reddit.com/search.json?q=' + inputProper
        
        body.removeChild(title)
        body.removeChild(instructions)
        body.removeChild(input)
        body.removeChild(buton)
    
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
})


function makeImageElement(data){
    for (let i = 0; i < 20;i++){
        let object = data.data.children[i]
        let image = object.data.thumbnail
        let newImage = document.createElement('img')
        newImage.classList.add('img')

        if (image === 'image' || image === 'self'){
            // newImage.src = 'https://picsum.photos/140/140'
        } else {
            newImage.src = image
            pushToPage(newImage)
        }
    } 
}

function pushToPage(newImage){
    body.appendChild(newImage)
}