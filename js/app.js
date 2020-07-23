fetch('https://www.reddit.com/search.json?q=pokemon+nsfw:no') 
.then(response =>{
    return response.json();

})

.then(data =>{
    //console.log(data);
    let profilePic1 = data.data.children[0].data.thumbnail
    //console.log(profilePic1);
    let profilePic2 = data.data.children[11].data.thumbnail
    //console.log(profilePic2)
    let profilepic3 = data.data.children[12].data.thumbnail
    //console.log(profilepic3)
    let profilepic4 = data.data.children[14].data.thumbnail
    //console.log(profilepic4)

const image1 = document.createElement('img1');
image.src = profilePic1; 
image.classList.add('img-1');
image.alt = pokemon;

const image2 = document.createElement('img2');
image.src = profilePic2; 
image.classList.add('img-2');
image.alt = pokemon;

const image3 = document.createElement('img3');
image.src = profilePic3; 
image.classList.add('img-3');
image.alt = pokemon;

const image4 = document.createElement('img4');
image.src = profilePic4; 
image.classList.add('img-4');
image.alt = pokemon;





    
})  





