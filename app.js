
const container = document.querySelector('.container')
const stop = document.querySelector('.stop')


fetch ('https://www.reddit.com/search.json?q=famous+buildings+nsfw:no')

.then (response => {
    console.log(response)
    return response.json();


})

.then (data => {

    console.log(data);
    let thumbnailOne = data.data.children[0].data.thumbnail;
    console.log(thumbnailOne);
    let thumbnailTwo = data.data.children[1].data.thumbnail;
    console.log(thumbnailTwo);
    let thumbnailThree = data.data.children[2].data.thumbnail;
    console.log(thumbnailThree);
    
})

const getStop = () => {

stop.addEventListener('click', getStop)

}