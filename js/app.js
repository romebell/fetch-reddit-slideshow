const link = 'http://www.reddit.com/search.json?q=';
const body = document.querySelector('body');
let button1 = document.querySelector('i');
let resetButton = document.querySelector('button');
let count = 0;
let picArray = [];
let head1 = document.getElementById('header');
let para = document.getElementById('description');
let form = document.querySelector('form');
let input2 = document.querySelector('input');
let image1 = document.querySelector('img');



document.addEventListener('DOMContentLoaded', function(){
    
    resetButton.addEventListener('click', event => {
        location.reload()
  
    })
    button1.addEventListener('click', getTextValue)

    input2.addEventListener('keyup', function (event) {
        if (event.keyCode === 13) {
            
            getTextValue();
        }
    })
})






function getTextValue () {

    event.preventDefault();
    resetButton.style.visibility = 'visible'
        
    let textValue = document.querySelector('#input').value;
    
    body.removeChild(head1);
    body.removeChild(para);
    body.removeChild(form);
    let splitText = textValue.split(' ').join('+');
    let link = 'http://www.reddit.com/search.json?q=';
    let input = link + splitText;
    console.log(input)


    fetch(input)
    .then(response => {
        return response.json();
    })
    .then(data => {

        makeImage(data)
    })
    .catch(error => {
        console.log('Error', error)
    })
            



            


}

function makeImage (data) {

    let loopArray = data.data.children;
    
    setInterval(function () {     
    
    
    
    console.log(count)
    image1.src = picArray[count]
    image1.style.height = '500px';
    image1.style.width = '500px';
    image1.style.borderRadius = '10px';
    count++;

    if (count===picArray.length) {
        count = 0;
    }
    
    }, 1000)
    // if (count === picArray.length) {
    //     count = 0;
    // }

    

    for (let i = 0; i < loopArray.length; i ++) {
        let pic = loopArray[i].data.url;
        if (pic.includes('jpg')){
            picArray.push(pic);
            
            console.log(picArray)
        }
    }
    // setInterval(makeImage, 5000)
} 


function slideShow () {
    ;
    
}
    
    // count ++;
    // if (count > image1.length) {count = 1}


// getTextValue();

// image1.src = pic;
                // image1.style.height = '300px';
                // image1.style.width = '200px';
                // image1.style.visibility = 'visible';
        
                
                // if (pic === 'self' || pic === 'image' || pic === 'spoiler' || pic === 'default') {
                    
                    
                //     image1.src = 'https://picsum.photos/200/300',
                //     image1.style.visibility = 'visible'
     
                // }   else {
                    
                //     
                    
                // }





