document.addEventListener("DOMContentLoaded", function()
{
    let body = document.querySelector("body");
    let container = document.querySelector(".container");
    let button = document.querySelector(".start");
    let containerTwo = document.querySelector(".container-2");
    let mechPicture = [];
    let slideIndex = 0;

    function displayPic()
    {
        var i;
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

        getPics[slideIndex - 1].style.display = "block";
        setTimeout(displayPic, 5000);
    }

    //if click start, remove all current elements and load slides
    button.addEventListener("click", function()
    {
        container.style.display = "none";
        containerTwo.style.display = "flex";
        fetch("https://www.reddit.com/search.json?q=mechanical+keyboards")
        .then(response =>
        {
            if (response.status === 200)
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

            for (let i = 0; i < mechPicture.length; i++)
            {
                let addImage = document.createElement("img");
                addImage.setAttribute("src", mechPicture[i]);
                addImage.classList.add("slides");
                containerTwo.appendChild(addImage);
                addImage.style.width = "200px";
                addImage.style.display = "none";
            }
            displayPic();


        });



    })





})
