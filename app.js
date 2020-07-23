let searchButton = document.querySelector(".search");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector(".reset");


document.addEventListener("DOMContentLoaded", function (){
    //images appear only when search button is clicked
    searchButton.addEventListener("click", event => {
        const input = document.querySelector(".input").value;
        let searchInput = input.split(" ").join("+");
        let requestURL = "https://www.reddit.com/search.json?q=" +searchInput;

        body.removeChild(h1);
        body.removeChild(searchButton);
        body.removeChild(resetButton);
    })

fetch("requestURL")
.then(responseData => {
    //console.log(responseData);
    return responseData.json();
})
.then(jsonData => {
    //console.log(jsonData);

    //let allImages = jsonData.data.children;
    //console.log(allImages);
    let picture = jsonData.data.children;
    //const image = document.createElement("img");

    for (let i = 0; i < 20; i++) {
        let thumbnail = picture[i].data.url;
        //console.log(thumbnail);
        setInterval (
        function appendImagetoBody() {

        const previousImg = document.querySelector(".images");
        //previousImg.remove();
        if (previousImg != null) {
            previousImg.remove();
        }

        const image = document.createElement("img");
        image.src = thumbnail;
        image.classList.add("images");
        let div = document.querySelector("div");
        div.appendChild(image);
        //console.log(image)
    } , 2000);
}
}) 

//function to search for images when button is pressed
function searchReddit() {
    let grabText = document.querySelector("input").value;
    let searchButton = document.querySelector("search");

}

})

