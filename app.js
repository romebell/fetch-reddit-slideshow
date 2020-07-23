
document.addEventListener("DOMContentLoaded", function(){
const requestURL = 'https://www.reddit.com/search.json?q=famous+buildings+nsfw:no'
const imageArray = document.querySelectorAll('.carousel-item')
//const stop = document.querySelector('.stop')

fetch (requestURL)
.then (response => {
    console.log(response)
    return response.json();

   
})
.then (data => {

    console.log(data);

    let thumbnailOne =data.data.children[0].data.thumbnail;
    console.log(thumbnailOne);
    
    let thumbnailResult = data.data.children;

    for(let i = 0; i < thumbnailResult.length; i++){
        let thumbnail = thumbnailResult[i].data.thumbnail;
        console.log(thumbnail);

        imageArray[i].src = thumbnail;
    }

    


// const imageShow = document.createElement('div')
// thumbnail.forEach(image => {
//     let imageBuilding = document.createElement('image');
//     imageBuilding.src = `${image}`;
//     imageShow.appendChild(imageBuilding);
})

// const getStop = () => {

// stop.addEventListener('click', getStop)

//}
