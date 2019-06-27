
function swapMainImage(thumbnail)
{
    console.log("in Swap Image Function");    
    let sourceBigImage = thumbnail.dataset.largeVersion;
    let mainImage = document.querySelector("#gallery-photo img");

    mainImage.setAttribute("src", sourceBigImage);
    mainImage.setAttribute("alt", thumbnail.alt);

    let classNameCurrentImage = "current";
    document.querySelector("." + classNameCurrentImage).classList.remove(classNameCurrentImage);
    thumbnail.parentNode.classList.add(classNameCurrentImage);

    document.querySelector("#gallery-info h3").innerHTML = thumbnail.dataset.title;
    document.querySelector("#gallery-info p").innerHTML = thumbnail.dataset.description;
}

function activateGallery()
{
    alert("Hello from the gallery js file");

    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            swapMainImage(this);
        })
    })
}


