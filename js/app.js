const textField = document.querySelector('.search-bar');
const searchButton = document.querySelector('.btn');

document.addEventListener('DOMContentLoaded', function() {
    const redditSite = 'http://www.reddit.com/search.json?q=rabbits+nsfw:no';
    fetch(redditSite)
    .then(response => {
        
        return response.json();
    })
    .then(data => {
        
        let result1 = data.data.children;
        let result2 = result1.map(function(images) {
            let myImage = images.data.thumbnail
            return myImage
        });
        const showMe = document.getElementById("show-me");
        result2.forEach((myImage) => {
            let imageSlide = document.createElement("img");
            imageSlide.src = `${myImage}`
            showMe.appendChild(imageSlide)
        });
    });

});