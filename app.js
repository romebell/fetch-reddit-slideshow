document.addEventListener("DOMContentLoaded", function (){
    fetch("https://www.reddit.com/search.json?q=cute+puppies")
.then(responseData => {
    console.log(responseData);
    return responseData.json();
})
.then(jsonData => {
    //console.log(jsonData);

    //let allImages = jsonData.data.children;
    //console.log(allImages);
    let picture = jsonData.data.children;
    for (let i = 0; i < picture.length; i++) {
        //let allImages = jsonData.data.children[i];
        let thumbnail = picture[i].data.url;
        console.log(thumbnail);

        const image = document.createElement("img");
        image.src = thumbnail;
        image.classList.add("image");
        let body = document.querySelector("body");
        body.appendChild(image);
       //console.log(imageCycle);
    }
})

})