
// const body = document.querySelector('body');

// document.getElementById(input.value);

// let fetchURL = "http://www.reddit.com/search.json?q=cat+nsfw:no";
// //${input.value}

// // console.log(url);
// fetch(fetchURL)

// .then(response => {

//     return response.json();
// })

// .then(data => {

//     console.log(data);

    
//     let firstIMG = data.children[i].data.thumbnail;

//     let images = data.results;


// })
////////////////////////
// document.addEventListener("DOMContentLoaded", function() {
//     const requestURL = "http://www.reddit.com/search.json?q=cat+nsfw:no";

//     fetch(requestURL)
//     .then(function(responseData){
//         console.log(responseData);
//         return responseData.json();
//     })
//     .then(function(jsonData) {
//         console.log(jsonData);
    

//         let results = jsonData.data.children;
//         let infoNeeded = results.map(function (imageResults){
//             let image = imageResults.data.thumbnail;
//             return image;
//         })
//         const imageShow = document.getElementById("x");
//         infoNeeded.forEach((image) => {
//             let imageDaddy = document.createElement("img");
//             imageDaddy.src = `${image}`;
//             imageShow.appendChild(imageDaddy);
//         });
//     });
// });
/////////////////////


// var input = getEmelementById("search").value;

let slideshowTimer;
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const form = document.querySelector("form");
// start.addEventListener("click", )

function redditFetch(requestURL){

    document.addEventListener("DOMContentLoaded", function() {
        
        
        
        const body = document.querySelector('body');
        fetch(requestURL)
        .then(function(response){
    
            return response.json();
    
        })
    
        .then(function(jsonData){
    
            // console.log(jsonData);
    
            let allThumbnail = jsonData.data.children;
    
        
        
                
            for (let i=0; i < 20;i++) {
                // url 
                let theThumbnail = allThumbnail[i].data.url;
                
                // only returns valid images theThumbnail.includes(".gif")  && (!theThumbnail.includes(".gifv"))
                if (theThumbnail.includes(".jpeg") || theThumbnail.includes(".png") || theThumbnail.includes(".jpg")) {
                const image = document.createElement('img');
                image.src = theThumbnail;
                image.classList.add('displayImage');

                body.appendChild(image);
                }
                
    
    
                       
            }
            
            
        })
    })
}

form.addEventListener("submit", function(parameterEvent){
    parameterEvent.preventDefault();
    var input = parameterEvent.target[0].value;
    const requestURL = `http://www.reddit.com/search.json?q=${input}+nsfw:no`;
    console.log(requestURL);
    return ;
})


// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

/////////////////////

// document.addEventListener("DOMContentLoaded", function() {
//     // start.addEventListener("click", )
//     // const requestURL = "http://www.reddit.com/search.json?q=`${input}`+nsfw:no";
//     const requestURL = "http://www.reddit.com/search.json?q=cats+nsfw:no";
//     const body = document.querySelector('body');
//     fetch(requestURL)
//     .then(function(response){

//         return response.json();

//     })

//     .then(function(jsonData){

//         // console.log(jsonData);

//         let allThumbnail = jsonData.data.children;

//         // function delayImage(){
//         //     setInterval(delayImage, 3000);
//         // }
    
            
//             for (let i=0; i < 20;i++) {
//                 // url 
//                 let theThumbnail = allThumbnail[i].data.url;
                
//                 // only returns valid images theThumbnail.includes(".gif")  && (!theThumbnail.includes(".gifv"))
//                 if (theThumbnail.includes(".jpeg") || theThumbnail.includes(".png") || theThumbnail.includes(".jpg")) {
//                 const image = document.createElement('img');
//                 image.src = theThumbnail;
//                 image.classList.add('displayImage');

//                 body.appendChild(image);
//                 }
                


                   
//             }
        
        
//     })

   

    


// })