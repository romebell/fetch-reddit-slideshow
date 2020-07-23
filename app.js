document.addEventListener("DOMContentLoaded", function(){
  const requestURL = "https://www.reddit.com/search.json?q=lakers";

  fetch(requestURL)
    .then(function (data) {
      if(data.status === 200) return data.json();
      console.log(data);
      return data.json();
    })
    .then(function (jsonData) {
      console.log(jsonData);

      let results = jsonData.data.children;
      let infoNeeded = results.map(function (imageResults) {
        let image = imageResults.data.thumbnail;
        return image;
      });
      const imageShow = document.getElementById("imagePull");
      infoNeeded.forEach((image) => {
        let imageFather = document.createElement("img");
        imageFather.src = `${image}`;
        imageShow.appendChild(imageFather);
      });
    });
});
