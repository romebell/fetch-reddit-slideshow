document.addEventListener('DOMContentLoaded', function() {
    const requestURL = "https://www.reddit.com/search.json?q=new_car_launching+nsfw:no"

    fetch(requestURL)
    .then (function(response) {
        console.log(response);
        return response.json();
    })

    .then(data => {
        console.log(data);

        // const image = data.data.children.data
        // console.log(image);
    })

})