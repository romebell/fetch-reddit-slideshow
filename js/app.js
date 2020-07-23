const form = document.querySelector('form')
const s003 = document.querySelector('.s003')
const header = document.querySelector('.header')
const stopButton = document.querySelector('.stop')
let slideShowTimer;

var slideIndex = 0;

stopButton.addEventListener('click', () => {
    clearTimeout(slideShowTimer)
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    stopButton.style.display = "none"
    form.style.display = "block"
    header.style.display = "block"
    console.log(form.children[0].firstElementChild)
})

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    slideShowTimer = setTimeout(showSlides, 3500); // Change image every 2 seconds
}

const redditFetch = (searchTerm) => {
    const apiURL = `https://www.reddit.com/search.json?q=${searchTerm}&nsfw:no&type:image`

    fetch(apiURL)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson)
            const queryImages = responseJson.data.children.forEach(post => {

                if(post.data.url.includes('.jpg') || post.data.url.includes('.png') || post.data.url.includes('.jpeg')) {
                    const imageDiv = document.createElement('div')
                    imageDiv.setAttribute('class', 'mySlides fade')
                    const img = document.createElement('img')
                    img.src = post.data.url

                    imageDiv.append(img)
                    s003.append(imageDiv)
                }

            })

            stopButton.style.display = "block"
            form.style.display = "none"
            header.style.display = "none"
            showSlides()
        });
}

form.addEventListener("submit", event => {
    event.preventDefault()
    redditFetch(event.target[0].value)
})