document.addEventListener('DOMContentLoaded', function() {
    const requestURL = "https://www.reddit.com/search.json?q=new_car_launching+nsfw:no"
    const imageArray = document.querySelectorAll(".carousel-item")


    fetch(requestURL)
    .then (function(response) {
        console.log(response);
        return response.json();
    })

    .then(data => {
        console.log(data.data.children[0].data.thumbnail);

        let thumbSearch = data.data.children;     // declare and make a function to thumbnail
        for (let i = 0; i < thumbSearch.length; i++) {
            let thumbNail = thumbSearch[i].data.thumbnail;
            console.log(thumbNail)

            imageArray[i].src = thumbNail;


        }

        


    })
    .catch (error => {
        console.log("It's error", error);
    })

})

