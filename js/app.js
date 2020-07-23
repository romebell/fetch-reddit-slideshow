const submitButton = document.querySelector('button')
const textField = document.querySelector('input')
const redditJSON = 'https://www.reddit.com/search.json?q='


document.addEventListener('DOMContentLoaded', function() {
    submitButton.addEventListener('click', function() {
        console.log(textField.value);
        fetch(redditJSON + textField.value)
        .then(function(responseData) {
            // let userSearch = redditJSON + textField.value;
            console.log(responseData);
            
        })
        
        
    })
})

// fetch reddit search results


