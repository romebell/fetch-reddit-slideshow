var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');
var stop1 = document.getElementById('stop1');
var firstPart = 'https://www.reddit.com/search.json?q=';
var lastPart = '+nsfw:no';
var submit1 = document.getElementById('submit1');

document.getElementById('submit1').addEventListener('click', submitOne);
document.getElementById('stop1').addEventListener('click', stopOne);



function submitOne() {
    container1.style.display='none';
    container2.style.display='block';
    var weSearch = document.getElementById('search1').value;
    var fullAddress = firstPart + weSearch + lastPart;
    console.log(fullAddress);
}

function stopOne () {
    container1.style.display='block';
    container2.style.display='none';
}
