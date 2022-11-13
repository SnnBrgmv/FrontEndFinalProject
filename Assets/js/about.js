{
    let slideIndex = 1;
    slideShow(slideIndex);
    
    function nextSlides(n) {
        slideShow(slideIndex += n);
    }
    
    function currentSlide(n) {
        slideShow(slideIndex = n);
    }
    
    function slideShow(n) {
      let i;
      let slides = document.getElementsByClassName("Slides");
      let imgopct = document.getElementsByClassName("img-opacity");
      if (n > slides.length) {slideIndex = 1}  
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < imgopct.length; i++) {
        imgopct[i].className = imgopct[i].className.replace(" active", "");
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}  
      slides[slideIndex-1].style.display = "block";  
      imgopct[slideIndex-1].className += " active";
      setTimeout(slideShow, 2000);
    }
    }

    {
         var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
        }