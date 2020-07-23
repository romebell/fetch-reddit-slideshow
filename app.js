let requestURL;
// document.addEventListener("click", function() {
const getInput = () => {
    var userInput = document.getElementById("searchInput").value;
    console.log(userInput);    
    requestURL = "https://www.reddit.com/search.json?q=" + userInput + "+nsfw:no";
    console.log(requestURL);    
    return requestURL;
}
console.log(getInput);
// let inputVar = getInput;
// document.addEventListener("DOMContentLoaded", function() {
    

    
fetch (requestURL)
.then (response => {
console.log(response)
})
    
    


// });
// const container = document.querySelector(".container")