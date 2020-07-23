const form = document.querySelector('.container')
const imageArray = document.querySelectorAll(".holder")
const button = document.createElement("button");
    console.log(button);
    button.classList.add('reset-button')
    form.appendChild(button);


form.addEventListener("submit", function(e){
    e.preventDefault()
    const value = document.getElementById("input").value
    console.log(value)
    const url = `http://www.reddit.com/search.json?q=${value}+nsfw:no`//search bar function
    console.log(url)
    let response = fetch(url).then(function(response){
        return response.json()
        
        
        
    }).then(function(data){
        let thumbSearch = data.data.children;
        console.log(data);
        // if(data.blog === null);
        // console.log('ther is not info here');
        // if(data.thumbnail === '')
        // console.log('here is something')
        
        for (let i = 0; i < thumbSearch.length; i++){
            
            let thumbNails = thumbSearch[i].data.thumbnail;
            console.log(thumbNails);
            console.log(imageArray);
            imageArray[i].src = thumbNails
            
            
            
            
            
        }
        
    }).catch(error => {
        console.log("this is an error" + error)
    } )
    
    
    
    //console.log(response)
})





