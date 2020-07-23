const body = document.querySelector('body')
const form = document.querySelector('.search-bar')
const submit = document.querySelector('.search-btn')

submit.addEventListener('click', function() {
    console.log("searching");
    const input = document.querySelector('.search-input').value
    console.log(input);
})

fetch('https://www.reddit.com/search.json?q=cats+nsfw:no')
.then(response => {
    return response.json()
})
.then(jsonData => {
    let data = jsonData.data
    let children = data.children
    let eachChild = children[1]
    let childData = eachChild.data
    let picture = childData.thumbnail
    console.log(picture);

})