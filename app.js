document.addEventListener("DOMContentLoaded", function () {
    
    let firstPart = 'https://www.reddit.com/search.json?q='; //Martin explain how they was easier to use so that 
    let search = document.getElementById('search').value; //it would take into consideration of what people would type in
    let lastPart = '+nsfw:no';
    
    requestURL = firstPart + search + lastPart;
   
    fetch(requestURL)
        .then(response => {
            return response.json();
        }) 
        
        .then (data => {
            // console.log(data);

            // if(data.blog === ''){
            //     console.log('There is no info here');
            // }

            if (data.email === null) {
                console.log('there is nada here');
            }


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


