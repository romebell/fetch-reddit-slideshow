document.addEventListener("DOMContentLoaded", function (){
// const body = document.querySelector("body")
// const text = document.querySelector("input")
//const jsonLink = "https://www.reddit.com/search.json?q=snakes+nsfw:no";
const form = document.querySelector("form");
let slideShowTime 
// getElementByID("input.value");

function redditFetch(apiURL){
    fetch(apiURL)
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
        infoNeeded.forEach((image) =>{
            let imageBank = document.createElement("img");
            imageBank.src = `${image}`;
            imageAppear.appendChild(imageBank);
        });
    });
}

form.addEventListener("submit", function(parameterEvent){
   parameterEvent.preventDefault();
   var searchTerm = parameterEvent.target[0].value; 
   const jsonLink = `https://www.reddit.com/search.json?q=${searchTerm}+nsfw:no`;
   redditFetch(jsonLink);

})



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  slideShowTime = setTimeout(showSlides);
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
});