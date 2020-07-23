const form = document.querySelector('form')
var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3500); // Change image every 2 seconds
}

const redditFetch = (searchTerm) => {
    const apiURL = `https://www.reddit.com/search.json?q=${searchTerm}&nsfw:no&type:image`
    const s003 = document.querySelector('.s003')
    const header = document.querySelector('.header')

    fetch(apiURL)
        .then(response => response.json())
        .then(responseJson => {
            const queryImages = responseJson.data.children.forEach(post => {
                const imageDiv = document.createElement('div')
                imageDiv.setAttribute('class', 'mySlides fade')
                const img = document.createElement('img')
                img.src = post.data.thumbnail

                imageDiv.append(img)
                s003.append(imageDiv)
            })

            form.style.display = "none"
            header.style.display = "none"
            showSlides()
        });
}

form.addEventListener("submit", event => {
    event.preventDefault()
    redditFetch(event.target[0].value)
})