
// //starts with an event listener, activated by the submit button.
// //event listener logs the value of entry into searchTerm, updates requestURL
// //then it activates fetch to create an array of thumbnails
// //it uses these thumbnail values to create the carousel function
// //it will also allow for a button that will make slideshow stop

// //function to pull element from form and log into entry
// //let input = 'kitten';


// let button = document.getElementsByTagName("submit");
// function changeHTML(){
//     var searchTerm= document.getElementById("input").value;
//     let requestURL = 'https://www.reddit.com/search.json?q=' +searchTerm;
//     console.log(requestURL);
// }
// document.addEventListener("click", changeHTML);
//     //can't seem to get event listener to work on button, just sampling with document until later
// //isn't pulling from the site

//     function makeCarousel(){
//         const carouselDiv = document.createElement('div');
//         carouselDiv.classList.add('carousel-item');
//         const image = document.createElement('img');
//         image.classList.add('d-block w-100');
//     }
//         fetch(requestURL)
//         .then(response => {
//             return response.json();
//         }
// .then(data =>{
//     for(i = 0; i<50; i++) {
//     let pictures = data.data.children[i].date.thumbnail;
//     console.log(pictures);
//     pictures.forEach(makeCarousel);
//     };


// }))
  
// //pictures found in data.children.data.thumbnail


// //next add carousel from bootstrap to appear on click. Also create button to clear event listeners.
// //   //<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
// //   <div class="carousel-inner">
// //   <div class="carousel-item active">
// //     <img class="d-block w-100" src="..." alt="First slide">
// //   </div>
// //   <div class="carousel-item">
// //     <img class="d-block w-100" src="..." alt="Second slide">
// //   </div>
// //   <div class="carousel-item">
// //     <img class="d-block w-100" src="..." alt="Third slide">
// //   </div>
// // </div>
// // </div>

var container1 = document.getElementById('container1'); 
var container2 = document.getElementById('container2');
var image1 = document.getElementById('image1'); 
var stop1 = document.getElementById('stop1');
var firstPart = 'https://www.reddit.com/search.json?q=';
var lastPart = '+nsfw:no';
var submit1 = document.getElementById('submit1');
document.getElementById('submit1').addEventListener('click', submitOne);
document.getElementById('stop1').addEventListener('click', stopOne);

function submitOne() {
    container1.style.display='none';
    container2.style.display='block';
    var weSearch = document.getElementById('search1').value;
    var fullAddress = firstPart + weSearch + lastPart;
    fetch(fullAddress)
        .then (response => {
            return response.json();
        })
        .then(data => {
            var numb1 = 1;
            imgRot();
            function imgRot() {
                image1.src = data.data.children[numb1].data.thumbnail;
                console.log(data.data.children[numb1].data.thumbnail);
                numb1 ++;
                setTimeout(imgRot, 2000);
            }
        })
}

    function stopOne () {
    container1.style.display='block';
    container2.style.display='none';
    clearTimeout(submitOne(imgRot));
    };
    