function openModal(n) {
  document.getElementById("myModal" + n).style.display = "block";
}

function closeModal(n) {
  document.getElementById("myModal" + n).style.display = "none";
}

// var slideIndex = 1;
// showSlides(slideIndex);

function plusSlides(n, yr) {
  showSlides(slideIndex += n, yr);
}

function currentSlide(n) {
  var str_n = n.toString();
  var sl_str = str_n.substr(4, 1);
  var yr_str = str_n.substr(0, 4);
  var sl = parseInt(sl_str);
  var yr = parseInt(yr_str);
  showSlides(slideIndex = sl, yr);
}

function showSlides(n, x) {
  var i;
  var slides = document.getElementsByClassName("mySlides" + x);
  var dots = document.getElementsByClassName("demo" + x);
  var captionText = document.getElementById("caption" + x);
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
  console.log(captionText.innerHTML);
}
