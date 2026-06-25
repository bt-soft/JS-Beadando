function upDate(previewPic) {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;

}

function unDo() {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function onLoad() {

    const images = document.querySelectorAll("img.preview");

    console.log("images: ", images);

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabIndex", "0");
    }
}

function onFocus(previewPic) {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function onBlur() {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}