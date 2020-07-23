const link = 'http://www.reddit.com/search.json?q=';
const body = document.querySelector('body');
let button1 = document.querySelector('i');
let resetButton = document.querySelector('#reset');
let image1 = document.querySelector('img');
let head1 = document.getElementById('header');
let para = document.getElementById('description');
let form = document.querySelector('form');
let input2 = document.querySelector('input');







function getTextValue (inputs) {

    resetButton.addEventListener('click', event => {
      location.reload();  
    })

    button1.addEventListener('click', event => {
        
        resetButton.style.display = 'block'
        resetButton.style.width = '50px';
        resetButton.style.height = '25px';
        let textValue = document.querySelector('#input').value;
        

        body.removeChild(head1);
        body.removeChild(para);
        body.removeChild(form)

        
        
        

        function makeImage (data) {
            
            
            let loopArray = data.data.children;
            console.log(loopArray);
        
            for (let i = 0; i < 25; i ++) {
                
                let pic = loopArray[i].data.thumbnail;
        
        
        
                if (pic === 'self' || pic === 'image' || pic === 'spoiler' || pic === 'default') {
                    
                    
                    image1.src = 'https://picsum.photos/200/300',
                    image1.style.visibility = 'visible'
     
                }   else {
                    
                    image1.src = pic, 2000
                    image1.style.height = '300px';
                    image1.style.width = '200px';
                    image1.style.visibility = 'visible';
                    console.log(pic);
                }
        
                
        
        
        
            }
        
        }




            
            console.log(textValue);

            let splitText = textValue.split(' ').join('+');
            let link = 'http://www.reddit.com/search.json?q=';
            let input = link + splitText;


            fetch(input)
            .then(response => {
                return response.json();
            })
            .then(data => {

                makeImage(data);
            })
            .catch(error => {
                console.log('Error', error)
            })
            





})
}
getTextValue();






document.addEventListener('DOMContentLoaded', function(){





})