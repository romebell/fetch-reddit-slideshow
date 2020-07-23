const link = 'http://www.reddit.com/search.json?q=';
const body = document.querySelector('body');
let button1 = document.querySelector('i');
let resetButton = document.querySelector('button');

let head1 = document.getElementById('header');
let para = document.getElementById('description');
let form = document.querySelector('form');
let input2 = document.querySelector('input');







function getTextValue (inputs) {

    resetButton.addEventListener('click', event => {
      location.reload()

    })

    button1.addEventListener('click', event => {
        
        resetButton.style.visibility = 'visible'
        
        let textValue = document.querySelector('#input').value;
        let image1 = document.createElement('img');
        image1.style.width = '225px'
        
        console.log(image1);
        
        

        body.removeChild(head1);
        body.removeChild(para);
        body.removeChild(form);


        

        
        let count = 0;
        

        function makeImage (data) {
            
            
            let loopArray = data.data.children;
            console.log(loopArray)
            for (let i = 0; i < 25; i ++) {
                let pic = loopArray[i].data.url;
                
                
                console.log(pic)
                if (pic.includes('jpg')) {
                    
                    
                    image1.src = pic
                    image1.style.height = '500px';
                    image1.style.width = '500px';
                    image1.style.borderRadius = '10px';
                    
                    body.appendChild(image1);
                
                } 
                
                
                
            }
            // count ++;
            // if (count > image1.length) {count = 1}
        
            
            
            
            
                
                
                
            
        }

                // image1.src = pic;
                // image1.style.height = '300px';
                // image1.style.width = '200px';
                // image1.style.visibility = 'visible';
        
                
                // if (pic === 'self' || pic === 'image' || pic === 'spoiler' || pic === 'default') {
                    
                    
                //     image1.src = 'https://picsum.photos/200/300',
                //     image1.style.visibility = 'visible'
     
                // }   else {
                    
                //     
                    
                // }
            
        
                
        
        
        
            
        
        




            
            

            let splitText = textValue.split(' ').join('+');
            let link = 'http://www.reddit.com/search.json?q=';
            let input = link + splitText;
            console.log(input)


            fetch(input)
            .then(response => {
                return response.json();
            })
            .then(data => {

                makeImage(data)
            })
            .catch(error => {
                console.log('Error', error)
            })
            



            

})
}

// getTextValue();






document.addEventListener('DOMContentLoaded', function(){

    

    getTextValue();



})