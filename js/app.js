var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');
var image1 = document.getElementById('image1');
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
    fetch(fullAddress)
    .then (response => {
        return response.json();
    })
    .then(data => {
        // console.log(data.data);
        // console.log(fullAddress);
        // console.log(data.data.children[3].data.thumbnail);

        var numb1 = 1;

        imgRot();
        function imgRot() {
            if (numb1 > 5) {

                console.log(numb1);
                numb1 = numb1 - 5;

            } else {
            if (data.data.children[numb1].data.thumbnail === null) {
                numb ++;
            } else {

            image1.src = data.data.children[numb1].data.thumbnail;
            console.log(data.data.children[numb1].data.thumbnail);

            numb1 ++;
            setTimeout(imgRot, 2000);
            }
        }
            }
        })
    }



function stopOne () {
    container1.style.display='block';
    container2.style.display='none';
}
