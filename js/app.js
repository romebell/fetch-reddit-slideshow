var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');
var stop1 = document.getElementById('stop1');
var firstPart = 'https://www.reddit.com/search.json?q=';
var lastPart = '+nsfw:no';
var submit1 = document.getElementById('submit1');
var search1 = document.getElementById('search1');
document.getElementById('submit1').addEventListener('click', submitOne);
document.getElementById('stop1').addEventListener('click', stopOne);
var weSearch = 'cats';
var fullAddress = firstPart + weSearch + lastPart;

function submitOne() {
    // document.getElementById("container1").display = "none";
    // document.getElementById("container2").display = "block";
    container1.style.display='none';
    container2.style.display='block';
    console.log(fullAddress);
  //  return field1.nodeValue
}

function stopOne () {
    container1.style.display='block';
    container2.style.display='none';
}
