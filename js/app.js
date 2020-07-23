let body = document.querySelector("body");
let container = document.querySelector(".container");
let button = document.querySelector(".start");
let containerTwo = document.createElement("div");
containerTwo.classList.add("container-2");
let mechPicture = [];
//let multiplier = [0];
let paused = true;

function displayPic(array, index)
{
    let onePic = array[index];
    let image = document.createElement("img");
    image.setAttribute("src", onePic);
    image.style.width = "200px";

    containerTwo.appendChild(image);

    console.log(image);
    
    setTimeout(removePic, 4999);
    setTimeout(displayPic(array, index + 1), 5000);
}

function removePic()
{
    let oldPic = document.querySelector("img");
    if (old !== null)
    {
        old.remove();
    }
}

document.addEventListener("DOMContentLoaded", function()
{
    //if click start, remove all current elements and load slides
    button.addEventListener("click", function()
    {
        container.style.display = "none";
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
                    //multiplier.push(multiplier[multiplier.length - 1] + 1);
                }

            }

            body.appendChild(containerTwo);
            //HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
            displayPic(mechPicture, 0);
            

        });



    })





})
