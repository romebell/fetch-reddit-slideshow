const textField = document.querySelector('.search-bar');
const searchButton = document.querySelector('.btn');

document.addEventListener('DOMContentLoaded', function() {
    const redditSite = 'http://www.reddit.com/search.json?q=rabbits+nsfw:no';
    fetch(redditSite)
    .then(response => {
        
        return response.json();
    })
    .then(data => {
        
        let result1 = data.data.children
        let result2 = resul1.map(funtion(images) {

        });
        console.log(result1);
    })

});