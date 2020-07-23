console.log('Please Tell me this work')
const container = document.querySelector('.container')
console.log(container)

const searchInput = document.getElementById('inputSearch')
console.log('search bar input ' + searchInput)

searchInput.addEventListener('input', () => searchProfile 
(searchInput.target.value))
console.log(searchInput)
// console.log(event.target.value)




const buttonInput = document.getElementById('buttonInput')
    // buttonInput.addEventListener('click', () => buttunClick (buttonInput.target.value))
        console.log('button input went off ' + buttonInput)
        //need to create element and push into html
        //when i click this button do this
        //use .value
        // const image = document.createElement('img')
        // console.log(image)
        // image.src = data[0].bHeartPic
        
//gotta have reset button  reload button
//clicked remove go buttton
//and reloaded location.load
//location.reload  
        //sign changes to a stop refresh airplane
        //create container of images queryimages and pulling them in 
        //if this button clicks go grab data
        //fetch in the button



fetch('https://secure-hamlet-19722.herokuapp.com/api/v1/characters')


.then(response =>{
    console.log(response)
    return response.json()
})
//array of characters
.then(data =>{
    console.log(data)
    
    //Black Heart Profile
    let bHeartPofile = data[0]
    console.log(bHeartPofile)
    let bHeartName = data[0].name
    console.log(bHeartName)
    let bHeartPic = data[0].head_shot
    console.log(bHeartPic)
    let bHeartSide = data[0].universe
    console.log(bHeartSide)
    
    //WarMachine Proifle
    let wMachinePofile = data[25]
    console.log(wMachinePofile)
    wMachineName = data[25].name
    console.log(wMachineName)
    wMachinePic = data[25].head_shot
    console.log(wMachinePic)
    wMachineSide = data[25].universe
    console.log(wMachineSide)

    //Cyclops Profile
    let CyclopsPofile = data[4]
    console.log(CyclopsPofile)
    let CyclopsName = data[4].name
    console.log(CyclopsName)
    let CyclopsPic = data[4].head_shot
    console.log(CyclopsPic)
    let CyclopsSide = data[4].universe
    console.log(CyclopsSide)
    
    //MegaMan Profile
    let megaManPofile = data[45]
    console.log(megaManPofile)
    let megaManName = data[45].name
    console.log(megaManName)
    let megaManPic = data[45].head_shot
    console.log(megaManPic)
    let megaManSide = data[45].universe
    console.log(megaManSide)
    
    //Ryu Profile
    let ryuPofile = data[49]
    console.log(ryuPofile)
    let ryuName = data[49].name
    console.log(ryuName)
    let ryuPic = data[49].head_shot
    console.log(ryuPic)
    let ryuSide = data[49].universe
    console.log(ryuSide)
    
    //Akuma Profile
    let akumaPofile = data[28]
    console.log(akumaPofile)
    let akumaName = data[28].name
    console.log(akumaName)
    let akumaPic = data[28].head_shot
    console.log(akumaPic)
    let akumaSide = data[28].universe
    console.log(akumaSide)

    //making a card



})

// var imgArray = new Array();

// imgArray[0] = new Image();
// imgArray[0].src = 'images/img/Splash_image1.jpg';

// imgArray[1] = new Image();
// imgArray[1].src = 'images/img/Splash_image2.jpg';

// /* ... more images ... */

// imgArray[5] = new Image();
// imgArray[5].src = 'images/img/Splash_image6.jpg';

// /*------------------------------------*/

// function nextImage(element)
// {
//     var img = document.getElementById(element);

//     for(var i = 0; i < imgArray.length;i++)
//     {
//         if(imgArray[i].src == img.src) // << check this
//         {
//             if(i === imgArray.length){
//                 document.getElementById(element).src = imgArray[0].src;
//                 break;
//             }
//             document.getElementById(element).src = imgArray[i+1].src;
//             break;
//         }
//     }
// }