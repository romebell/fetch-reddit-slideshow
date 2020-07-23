document.addEventListener('DOMContentLoaded', function(){
    
    
    
    let slide = document.createElement('div')
    let ledditURL = `https://reddit.com/search.json?q=`
    let userSearch = '' 
    let nsfw = '+nsfw:no'
    let requestURL = ledditURL + userSearch + nsfw
    console.log(requestURL);

    //select the button element by its id and add a click eventlisetner 
    //which runs a function
    //inside of the function select the element  I want to remove by its
    //unique identifier 
    //set the display style of this element to none

//fetch
    fetch(requestURL,{mode:'no-cors'})
    .then(response => {
        console.log(response);
        return response.json();
        
        
    })
    .catch(error => {
        console.log('This is an error: ' + error);
    })
    .then(data => {
        console.log(data);
        let slide = []
        // for(i = 0; i < data.children.length ; i++){
        // let images = data.children[i].data.thumbnail;
        // slide.push(images);
        

        // gallery = document.getElementsByClassName('container')
        // for (i = 0; i < slide.length ; i++)
        // galleryImage = slide[i]
        // }
        

    })


    function textInput() {
    var userInput = document.getElementsByClassName('form-control').value
       
    }
    
})


