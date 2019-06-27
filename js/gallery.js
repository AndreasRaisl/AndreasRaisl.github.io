
function swapMainImage(thumbnail)
{
    console.log("in Swap Image Function");
    let sourceBigImage = thumbnail.data-large-version;
    let mainImage = document.querySelector("#gallery-photo img");
    mainImage.setAttribute("src", sourceBigImage);

}

function activateGallery()
{
    alert("Hello from the gallery js file");

    let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function() {
            swapMainImage(this);
        })
    })
}

