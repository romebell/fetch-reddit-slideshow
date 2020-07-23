let body = document.querySelector("body");
let container = document.querySelector(".container");
let mechPicture = [];
let button = document.querySelector(".start");

let containerTwo = document.createElement("div");
containerTwo.classList.add("container-2");


function displayPic(num)
{
    let img = document.createElement("img");
    img.setAttribute("src", mechPicture[num]);

    let old = document.querySelector(".remove");

    if (num > 0)
    {
        containerTwo.removeChild(old);
    }
    
    containerTwo.appendChild(mechPicture[num]);
    img.classList.add("remove");
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
            return response.json();
        })
        .then(data =>
        {
            datas = data.data.children;

            for (let i = 0; i < datas.length; i++)
            {
                let image = datas[i].data.url;
                let imageType = image.substring(image.length - 3, image.length);

                if (imageType === "jpg" || imageType === "png")
                {
                    mechPicture.push(image);
                }

            }


            setInterval(5000, )

            for (let i = 1; i < mechPicture.length; i++)
            {
                setInterval(5000, )
            }

        });



    })





})
