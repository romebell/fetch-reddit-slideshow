const link = 'http://www.reddit.com/search.json?q=cats';
const body = document.querySelector('body');
let button = document.querySelector('i');
let textValue = document.querySelector('#input').value;


function getTextValue () {
    
    button.addEventListener('click', event => {
        let textValue = document.querySelector('#input').value;
        console.log(textValue);
    })
}
getTextValue();




document.addEventListener('DOMContentLoaded', function(){

    fetch(link)
    .then(response => {
        return response.json();
    })
    .then(data => {

        let loopArray = data.data.children;
        console.log(loopArray);

        for (let i = 0; i < 25; i ++) {
            
            let pic = loopArray[i].data.thumbnail;
            console.log(pic);
            let newImage = document.createElement('img');
            
            if (pic === 'self') {
                newImage.src = 'https://picsum.com/200/300';
                setTimeout(body.appendChild(newImage), 5000)
            } else {
                newImage.src = pic;
                body.appendChild(newImage)
            }

            



        }



    })

})