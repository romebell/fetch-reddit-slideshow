//function to pull element from form and log into entry
let entry = 'kitten';
const requestURL = 'https://www.reddit.com/search.json?q='+ entry;
document.addEventListener('click', function(){
    console.log(requestURL); 
   });

