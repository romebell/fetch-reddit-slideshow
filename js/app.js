const submitButton = document.querySelector('#search-button');
const textField = document.querySelector('input');
const container = document.querySelector('.container');
const header = document.querySelector('header');
const redditJSON = 'https://www.reddit.com/search.json?q='
const sfw = '+nsfw:no'
const stopButton = document.createElement('button');
let imageArray = []

document.addEventListener('DOMContentLoaded', function() {
    submitButton.addEventListener('click', function() {
      console.log(textField.value);
      fetch(redditJSON + textField.value + sfw)
      .then(function(responseData) { // fetch data with url
          // let userSearch = redditJSON + textField.value;
          console.log(responseData);
          if (responseData.status === 200) { // still getting self errors
            return responseData.json(); // return in json for that
          }
      })
      .then(function(jsonData) {
          let results = jsonData;
          let children = results.data.children
          console.log(children);
          for (let i = 0; i <= 15; i++) {
              // does a catch() call go in here?
              let eachImage = children[i].data.thumbnail;
              let createNewImage = document.createElement('img');
               // this logic caused no images to display
              // if (eachImage != 'self' && 
              // eachImage != 'image' && 
              // eachImage != undefined &&
              // eachImage != 'default') { 
              imageArray.push(eachImage);
              createNewImage.src = imageArray[i];
              console.log(createNewImage.src);
              container.appendChild(createNewImage);
              // console.log(imageArray);
              // }
              }
          }

      )
      .catch(err => {
        // happens if something breaks
        console.log('Error', err)
    })
      hideElements();
      showStopButton();
      
  })
})

// if (eachImage.includes('.jpg') || 
//               eachImage.includes('.png') || 
//               eachImage.includes('.gif')) {

function hideElements() {
  submitButton.style.visibility = 'hidden';
  textField.style.visibility = 'hidden';
  header.style.visibility = 'hidden';
  
}

function showElements() {
  submitButton.style.visibility = 'visible';
  textField.style.visibility = 'visible';
  header.style.visibility = 'visible';
}

function showStopButton() {
  stopButton.setAttribute('id', 'stop-button');
  stopButton.textContent = 'Stop Slideshow  '
  container.appendChild(stopButton);
  clickStopButton();
}

function clickStopButton() {
  stopButton.addEventListener('click', function() {
    resetPhotos();
    showElements();
    
  }
)};

// const checkImage = () => 

// function resetPhotos() {
//   // need to refactor to easily remove images   
//   imageArray = []
//   let allImages = document.querySelectorAll('img'); // add class to all images
//   allImages.forEach(function () {
//     remove())
// }


const carouselControls = document.createElement('div');
carouselControls.classList.add('carousel', 'slide'); 
carouselControls.setAttribute('id', 'carouselControls');
carouselControls.setAttribute('data-ride', 'carousel');

// append this to carouselControls
const carouselInner = document.createElement('div');
carouselInner.classList.add('carousel-inner');

const carouselItemActive = document.createElement('div');
carouselItemActive.classList.add('carousel-item', 'active');

// append to carouselItemsActive
const activeImage = document.createElement('img');
activeImage.classList.add('d-block', 'w-100');
activeImage.setAttribute('alt', 'First slide');
// add newImage.src at [0] activeImage.src =

// append to carousel inner
const carouselItemNotActive = document.createElement('div');
carouselItemNotActive.classList.add('d-block', 'w-100');
carouselItemNotActive.setAttribute('alt', 'Second slide');



// carouselControls.
// container.appendChild
// boontscrap
/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> */

// fetch('https://api.github.com/users/blangwwll')
// .then(response => {
//   console.log(response);
//   if (response.status === 200) {
//     return response.json();
//   }
//   })

//   .then(data => {
//     console.log(data);
//     if (data.blog === null) {
//       console.log('there is no info here');
//     }
    
//     if (data.email === null) {
//       console.log('there is no email here');
//     }
// })
//   .catch(error => {
//     console.log('this is an error: ' + error);
//   }) // write after last .then - if something wrong

            // newImage.src = children[i].data.thumbnail;
            // newImage.style.flexDisplay = 'row'; // this throws invalid assignment
            // the above works, but mvp is to make an array 