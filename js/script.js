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
        
        for (let i = 0; i < thumbSearch.length; i++){
            
            let thumbNails = thumbSearch[5].data.thumbail;
            console.log(thumbNails);
            
            // const displayP = document.getElementsByTagName('body');
            // displayP.src = thumbNails;
            // .appendChild(thumbNails);
            // console.log();

        }

    })

    //console.log(response)
})





