document.addEventListener("DOMContentLoaded", function()
{
    let body = document.querySelector("body");
    let container = document.querySelector(".container");
    let button = document.querySelector(".start");
    let containerTwo = document.querySelector(".container-2");
    let pP = document.querySelector(".pauseAndPlay");
    let mechPicture = [];
    let slideIndex = 0;
    let pausedIndex;
    let killFunction = false;

    function displayPic()
    {
        var i;
        if (slideIndex !== null)
        {
            let getPics = document.getElementsByClassName("slides");
            for (i = 0; i < getPics.length; i++)
            {
                getPics[i].style.display = "none";
            }
            
            slideIndex++;
            
            if (slideIndex > getPics.length) 
            {
                slideIndex = 1
            }

            console.log(slideIndex);
            getPics[slideIndex - 1].style.display = "block";
            
            setTimeout(displayPic, 2000);
            
        }
    }

    function createImages(array)
    {
        for (let i = 0; i < array.length; i++)
        {
            let addImage = document.createElement("img");
            addImage.setAttribute("src", array[i]);
            addImage.classList.add("slides");
            containerTwo.appendChild(addImage);
            //addImage.style.width = "90vh";
            addImage.style.display = "none";
        }
        killFunction = false;
    }

    function removeImages(array)
    {
        for (let i = 0; i < array.length; i++)
        {
            let addedImage = document.querySelector(".slides");
            addedImage.remove();
        }
    }

    //if click start
    button.addEventListener("click", function()
    {
        //remove all current elements and load pre-made empty container
        container.style.display = "none";
        containerTwo.style.display = "flex";

        //proxy URL helps access data without getting blocked by "Access-Control-Allow-Origin" thing
        let proxyURL = "https://cors-anywhere.herokuapp.com/"
        
        //combine proxyURL with actual URL to prevent getting blocked
        fetch(proxyURL + "https://www.reddit.com/search.json?q=mechanical+keyboards+nsfw:no")
        .then(response =>
        {
            //return status only if we are able to obtain a valid image URL
            if (response.status === 200)
            {
                return response.json();
            }
        })
        .then(data =>
        {
            //bring data in
            datas = data.data.children;

            //check if data is valid (not empty and only .jpg or .png)
            //if valid, push URL mechPicture array
            for (let i = 0; i < datas.length; i++)
            {
                let image = datas[i].data.url;
                let imageType = image.substring(image.length - 3, image.length);

                if (image === "" || image === null || image === undefined)
                {
                    console.log("ERROR: null data point");
                }
                else if (imageType === "jpg" || imageType === "png")
                {
                    mechPicture.push(image);
                }

            }

            //check if we have the URLs
            console.log(mechPicture);

            //just in case error accidentally increments it
            slideIndex = 0;
            //create the images on HTML through DOM
            createImages(mechPicture);
            
            //set individual image to display and change image displayed through recursive calling of function
            displayPic();

            //create the three painful buttons
            let resumeButton = document.createElement("button");
            let pauseButton = document.createElement("button");
            let restartButton = document.createElement("button");
            let stopButton = document.createElement("button");

            /*
            pauseButton.classList.add("pause");
            pauseButton.textContent = "PAUSE";
            pP.appendChild(pauseButton);
            pP.style.display = "flex";
            pauseButton.addEventListener("click", function()
            {
                pausedIndex = slideIndex;
                slideIndex = null;
                pauseButton.style.display = "none";

                resumeButton.classList.add("resume");
                resumeButton.textContent = "RESUME";
                pP.appendChild(resumeButton);
                pP.style.display = "flex";
                resumeButton.addEventListener("click", function()
                {
                    slideIndex = pausedIndex;
                    resumeButton.remove();
                    setTimeout(displayPic, 2000);
                    pauseButton.style.display = "flex";
                });
            });
            */
            
            /*
            restartButton.classList.add("restart");
            restartButton.textContent = "RESTART"
            body.appendChild(restartButton);
            restartButton.addEventListener("click", function()
            {
                //pauseButton.style.display = "none";
                restartButton.style.display = "none";
                //resumeButton.remove();
            
                
                slideIndex = null;
                //slideIndex = 0;
                //restartButton = null;
                clearTimeout();
                //removeImages(mechPicture);
                //setTimeout(createImages(mechPicture), 1500);
                setTimeout(function() {slideIndex = 0;}, 1500);
                setTimeout(function()
                {
                    //pauseButton.style.display = "flex";
                    restartButton.style.display = "flex";
                }, 2450);
                setTimeout(displayPic, 2500);
            });
            */

            //quick fix, wrong description read
            stopButton.classList.add("restart");
            stopButton.textContent = "STOP"
            body.appendChild(stopButton);
            stopButton.addEventListener("click", function()
            {
                stopButton.style.display = "none";
                restartButton.style.display = "none";
                clearTimeout();
                removeImages(mechPicture);

                containerTwo.style.display = "none";
                container.style.display = "flex";
            });


        })
        .catch(error =>
        {
            console.log("BROWSER ACCESS ERROR");
        })



    })





})