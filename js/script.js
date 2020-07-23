
//starts with an event listener, activated by the submit button.
//event listener logs the value of entry into searchTerm, updates requestURL
//then it activates fetch to create an array of thumbnails
//it uses these thumbnail values to create the carousel function
//it will also allow for a button that will make slideshow stop

//function to pull element from form and log into entry
//let input = 'kitten';


let button = document.getElementsByTagName("submit");
function changeHTML(){
    var searchTerm= document.getElementById("input").value;
    let requestURL = 'https://www.reddit.com/search.json?q=' +searchTerm;
    console.log(requestURL);
}
document.addEventListener("click", changeHTML);
    //can't seem to get event listener to work on button, just sampling with document until later
//isn't pulling from the site

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