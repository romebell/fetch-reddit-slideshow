const body = document.querySelector('body')
const form = document.querySelector('.search-bar')
const submit = document.querySelector('.search-btn')

submit.addEventListener('click', function() {
    console.log("searching");
    const input = document.querySelector('.search-input').value
    console.log(input);
})


