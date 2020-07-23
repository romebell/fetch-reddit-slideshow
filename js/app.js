const submitButton = document.querySelector('button')
const textField = document.querySelector('input')
const container = document.querySelector('.container')
const redditJSON = 'https://www.reddit.com/search.json?q='
const sfw = '+nsfw:no'

document.addEventListener('DOMContentLoaded', function() {
    submitButton.addEventListener('click', function() {
        console.log(textField.value);
        fetch(redditJSON + textField.value + sfw)
        .then(function(responseData) { // fetch data with url
            // let userSearch = redditJSON + textField.value;
            console.log(responseData);
            return responseData.json(); // return in json for that
        })
        .then(function(jsonData) {
            let results = jsonData;
            let children = results.data.children
            console.log(children);
            for (let i = 0; i <= 10; i++) {
                // does a catch() call go in here?
                let newImage = document.createElement('img');
                newImage.src = children[i].data.thumbnail;
                container.appendChild(newImage);

            }

        })
        .catch(function(error) {
            console.log('Oh no! it a ewwow', error);
        })
        
        
    })
})

// fetch reddit search results


