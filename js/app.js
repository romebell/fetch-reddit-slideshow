const body = document.querySelector(".body");

fetch("https://www.reddit.com/search.json?q=shakira+nsfw:no")
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
});

//
// data
// children
// data
// url_overridden_by_dest