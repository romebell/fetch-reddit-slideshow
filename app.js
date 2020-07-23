document.addEventListener('DOMContentLoaded', function(){
    let requestUrl= url
    let basicUrl = "https://reddit.com/search.json?q="
    let userInput = ""    
    let url = basicUrl + userInput + '+nsfw:no'

//fetch
    fetch(requestURL)
    .then(response => {
        return response.json()
        console.log(response)
    })
    .then(data => {
        console.log(data);
        let result = []
        for(i = 0; i < data.children.length ; i++);
        let images = data.children.data[i].thumnail;
        result.push(images);

    })
})


