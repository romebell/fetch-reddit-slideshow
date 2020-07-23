document.addEventListener("DOMContentLoaded", function () {
    
    const requestURL = "https://www.reddit.com/search.json?q=puppies";


    fetch(requestURL)
        .then (function (responseData) {
            return responseData.json();
        })
            .then(function(jsonData) {

                let results = jsonData.data.children;
                let resultsTwo = results.map(function (imageResults) {
                    let dogImages = imageResults.data.thumbnail;
                    return dogImages;
                });

                const imagePre = document.getElementById("sup");
                resultsTwo.forEach((image) => {
                    let bigImage = document.createElement("img");
                    bigImage.src = `${bigImage}`;
                    imagePre.appendChild(bigImage);


                });


            });

});




// <!-- <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
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
//   <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div> --></div>


