const form = document.querySelector('.container')
const holderImage = document.querySelector(".holder")
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
        console.log(data)
        
        for (let i = 0; 1 < 9; i++){
            
            let  = thumbnails = thumbSearch[1].data.thumnail;
            console.log(thumbnails);
        }
        
    })

    console.log(response)
})




