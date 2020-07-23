fetch('http://www.reddit.com/search.json?q=')
then.(response => {
    return response.json();
})
then.(data => {

    console.log(data)



})