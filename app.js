document.addEventListener("DOMContentLoaded", function (){
    fetch("https://www.reddit.com/search.json?q=cute+puppies")
.then(responseData => {
    //console.log(responseData);
    return responseData.json();
})
.then(jsonData => {
    //console.log(jsonData);

    //let allImages = jsonData.data.children;
    //console.log(allImages);
    let picture = jsonData.data.children;
    for (let i = 0; i < 25; i++) {
        //let allImages = jsonData.data.children[i];
        let thumbnail = picture[i].data.url;

        //console.log(thumbnail);


        setInterval(

        function appendImagetoBody() {
        setInterval(2000);
        const image = document.createElement("img");
        image.src = thumbnail;
        image.classList.add("images");
        let div = document.querySelector("div");
        div.appendChild(image);
        console.log(image)
    } ,2000);
        
    
    }
})

function convertText() {
    let grabText = document.querySelector("input").value;

}

})