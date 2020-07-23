//document.addEventListener("DomContentLoaded", function() {
    const requestURL = "https://www.reddit.com/search.json?q=Hypercars";

    fetch(requestURL)
        .then (responseData => {
            console.log(responseData);
            return responseData.json();
        })

        .then (data => {
            console.log(data);

            

            let results = data.children;
            let infoNeeded = results.map (imageResults => {
                let image = imageResults.data.thumbnail;
                return image;
            });
            const imageShow = document.getElementById("cars");
            infoNeeded.forEach((image) => {
                let imageDaddy = document.createElement("img");
                imageDaddy.src = '$(image)';
                imageShow.appendChild(imageDaddy);
            });
        });


