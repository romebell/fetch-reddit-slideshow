//function to pull element from form and log into entry
let input = 'kitten';

//const requestURL = 'https://www.reddit.com/search.json?q='+ entry;

let button = document.getElementsByTagName("submit");
var searchTerm = input;
let requestURL = 'https://www.reddit.com/search.json?q=' + searchTerm;
button.addEventListener("click", function(){
    //can't seem to get event listener to work. moving on.
//var searchTerm = document.getElementById("input");
    function makeCarousel(){
        const carouselDiv = document.createElement('div');
        carouselDiv.classList.add('carousel-item');
        const image = document.createElement('img');
        image.classList.add('d-block w-100');
    }
        fetch(requestURL)
        .then(function(responseData){
            return responseData.json()
        })
.then(jsonData =>{
    for(i = 0; i<jsonData.length; i++){
    let pictures = jsonData.data.children[i].date.thumbnail;
    console.log(pictures);
    pictures.forEach(makeCarousel)}

console.log(jsonData);
});
});
  
//pictures found in data.children.data.thumbnail


//next add carousel from bootstrap to appear on click. Also create button to clear event listeners.
//   //<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
//   <div class="carousel-inner">
//   <div class="carousel-item active">
//     <img class="d-block w-100" src="..." alt="First slide">
//   </div>
//   <div class="carousel-item">
//     <img class="d-block w-100" src="..." alt="Second slide">
//   </div>
//   <div class="carousel-item">
//     <img class="d-block w-100" src="..." alt="Third slide">
//   </div>
// </div>
// </div>