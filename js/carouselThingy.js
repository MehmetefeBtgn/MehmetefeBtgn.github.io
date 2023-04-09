let slideIndex = 1;

function goNth(n) {
    showImage(slideIndex = n);
}

function goNext(n) {
    showImage(slideIndex += n);
}

function showImage(n) {
    let i;
    let images = document.getElementsByClassName("carousel-image");
    let items = document.getElementsByClassName("carousel-image");
    let mainImage = document.getElementById("image-main").childNodes[1];
    if (n > images.length) {slideIndex = 1}
    if (n < 1) {slideIndex = images.length}
    for (i = 0; i < items.length; i++) {
      items[i].className = items[i].className.replace(" carousel-active", "");
    }
    items[slideIndex-1].className += " carousel-active";
    mainImage.src = items[slideIndex-1].childNodes[1].childNodes[1].src;
  }