var firstPart = 'https://www.reddit.com/search.json?q=';
var lastPart = '+nsfw:no'
var button1 = document.getElementById('submit1');
var field1 = document.getElementById('search1');
document.getElementById('button1').addEventListener('click', submitOne);
var weSearch = submitOne();
var fullAddress = firstPart + weSearch + lastPart;

function submitOne() {


}
//https://www.reddit.com/search.json?q=cats+nsfw:no
