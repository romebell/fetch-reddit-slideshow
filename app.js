document.addEventListener("DOMContentLoaded", function (){
// const body = document.querySelector("body")
// const text = document.querySelector("input")
const jsonLink = "https://www.reddit.com/search.json?q=snakes+nsfw:no";
// getElementByID("input.value");

fetch(jsonLink)
.then(function(responseData){
    console.log(responseData) ;
    return responseData.json();
    
})
.then(function(jsonInfo){
    console.log(jsonInfo);
    let result = jsonInfo.data.children;
    let infoNeeded = result.map(function(imageResult){
    let image = imageResult.data.thumbnail;
        return image;

    });
    const imageAppear = document.getElementById("me");
    infoNeeded.forEach((image) => {
        let imageBank = document.createElement("img");
        imageBank.src = `${image}`;
        imageAppear.appendChild(imageBank);
    });
});

});