const form = document.querySelector('.container')
form.addEventListener("submit", function(e){
    e.preventDefault()
    const value = document.getElementById("input").value
    console.log(value)
    const url = `http://www.reddit.com/search.json?q=${value}+nsfw:no`//search bar function
    console.log(url)
    let response = fetch(url).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data)
    })
    console.log(response)
})



