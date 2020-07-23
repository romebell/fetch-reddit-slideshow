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
            
            if (killFunction === false)
            {
                setTimeout(displayPic, 2000);
            }
            
        }
    }

    //if click start, remove all current elements and load slides
    button.addEventListener("click", function()
    {
        container.style.display = "none";
        containerTwo.style.display = "flex";
        let proxyURL = "https://cors-anywhere.herokuapp.com/"
        fetch(proxyURL + "https://www.reddit.com/search.json?q=mechanical+keyboards+nsfw:no")
        .then(response =>
        {
            if (response.status === 200 || response.status === 204)
            {
                return response.json();
            }
        })
        .then(data =>
        {
            datas = data.data.children;

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
            console.log(mechPicture);

            for (let i = 0; i < mechPicture.length; i++)
            {
                let addImage = document.createElement("img");
                addImage.setAttribute("src", mechPicture[i]);
                addImage.classList.add("slides");
                containerTwo.appendChild(addImage);
                addImage.style.width = "500px";
                addImage.style.display = "none";
            }
            displayPic();

            let resumeButton = document.createElement("button");
            let pauseButton = document.createElement("button");
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

            let restartButton = document.createElement("button");
            restartButton.classList.add("restart");
            restartButton.textContent = "RESTART"
            body.appendChild(restartButton);
            restartButton.addEventListener("click", function()
            {
                resumeButton.remove();
                pauseButton.style.display = "flex";
                killFunction = true;
                slideIndex = 0;
                setTimeout(displayPic, 500);
                killFunction = false;
            });


        })



    })





})