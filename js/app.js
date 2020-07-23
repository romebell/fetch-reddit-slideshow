const textField = document.querySelector('.search-bar');
const searchButton = document.querySelector('.btn');
const body = document.querySelector('body')
const inputSearch = document.querySelector('.search')
const redditSite = 'http://www.reddit.com/search.json?q=';
const safe = '+nsfw:no'
document.addEventListener('DOMContentLoaded', function() {
    let slides = document.createElement('div');
    let imageSlide = document.createElement("img");
    body.appendChild(imageSlide);
//create a event that will listen if the button is click and start the search
    searchButton.addEventListener('click', function() {
            
            searchButton.textContent = 'STOP'
        fetch(redditSite + textField.value + safe)
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            let result1 = jsonData.data.children;
            for (let i = 0; i < result1.length; i++) {
                let myImage = result1[i].data.thumbnail
                if (myImage !== 'self' && myImage !== 'image' && myImage !== undefined) {
                    let slides = document.createElement('div');
                    let imageSlide = document.createElement("img");
                    imageSlide.push(myImage)
                    imageSlide.src = myImage
                    myImage
                    

                }

            }
            
            
          
            
        });
            
    });
        
        // hideMe ()
        // stopAndReturn ()
})

    
        
// });

function hideMe () {
    document.querySelector('.title').style.display = 'none'
    textField.style.display = 'none'
}

function stopAndReturn () {
    searchButton.textContent = 'Search'
    document.querySelector('.title').style.display = 'show'
    textField.style.display = 'show'
}


//this is the slideshow carousel

// <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="..." class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="...">
//     </div>
//   </div>
//   <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>