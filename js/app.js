const submitButton = document.querySelector('button')
const textField = document.querySelector('input')
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
            console.log(results);
            
        })
        
        
    })
})

// fetch reddit search results


