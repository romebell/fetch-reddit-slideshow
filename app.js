var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');
var image1 = document.getElementById('image');
var stop1 = document.getElementById('stop');
var firstPart = 'https://www.reddit.com/search.json?q=';
var lastPart = '+nsfw:no';
var submit1 = document.getElementById('submit');



document.getElementById('submit').addEventListener('click', submitOne);
document.getElementById('stop').addEventListener('click', stopOne);


function submitOne() {
    container1.style.display='none';
    container2.style.display='block';
    var search = document.getElementById('search').value;
    var fullAddress = firstPart + search + lastPart;
    fetch(fullAddress)
    .then (response => {
        return response.json();
    })
    .then(data => {
        var numb1 = 1;
        imgRot();
        function imgRot() {
            image1.src = data.data.children[numb1].data.thumbnail;
            //console.log(data.data.children[numb1].data.thumbnail);
            numb1 ++;
            setTimeout(imgRot, 2000);
            }
        })
    
}

function stopOne () {
    container1.style.display='block';
    container2.style.display='none';
}






// const body = document.getElementById('container2');
// body.style.width = '18rem';
// console.log(body);

// const image = document.getElementById('image');
// image.src = image1.src; 
// image.atl = image1.src;
// console.log(image);


// console.log(body.appendChild(image));


//  <div id="container2" style="display: none">



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


