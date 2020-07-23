
    const json ="http://www.reddit.com/search.json?q=tigers"
    const body = document.querySelector('body');
    const container1 = document.getElementById('container1');
    const container2= document.getElementById('container2');
    let slide = []


    document.getElementById('slideShow').addEventListener('click',() =>{
        let title = document.getElementById('header');
        title.display = 'none';
        
        

    });

   // select the button elemenet by its id and add a click eventlistener which runs a function\
   // inside of the function select the element i want to remove by its ID 
   // set the display style of this element to none
   // 
   


    
    // const tigerOne = data.data.children[1].data.thumbnail
    // const tigerTwo = data.data.children[3].data.thumbnail
    // const tigerThree = data.data.children[4].data.thumbnail
    // const tigerFour = data.data.children[7].data.thumbnail
    
    
        
        fetch("http://www.reddit.com/search.json?q=tigers")
        .then(response =>{
            return response.json();
            console.log(response);
        })
        .then(data =>{
            console.log(data);
            let firstElement = data
            console.log(firstElement);
            let secondElement = data.data
            console.log(secondElement);
            let thirdElement = data.data.children
            console.log(thirdElement);
            let fourthElement = data.data.children[1]
            console.log(fourthElement);
            let fifthElement = data.data.children[1].data
            console.log(fifthElement)
            let tigerOne = data.data.children[1].data.thumbnail
            console.log(tigerOne);
            let tigerTwo = data.data.children[3].data.thumbnail
            console.log(tigerTwo);
            let tigerThree = data.data.children[4].data.thumbnail
            console.log(tigerThree);
            let tigerFour = data.data.children[7].data.thumbnail
            console.log(tigerFour)
            let tigerArray = [tigerOne,tigerTwo, tigerThree, tigerFour];
            console.log(tigerArray);


            for (let i = 0; i <  tigerArray.length; i++){
                let image = document.createElement('img')
                image.src = tigerArray[i]
                slide.push(image)
                

            }
            document.getElementById('container1').appendChild(slide[0])
            console.log(slide);
            
            
    







})








