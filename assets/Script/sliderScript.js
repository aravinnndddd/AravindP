let slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervelId = null;

// initializeSlide();
document.addEventListener("DOMContentLoaded",initializeSlide);

function initializeSlide(){
  if(slides.length > 0){
  slides[slideIndex].classList.add("displaySlide");
  intervelId = setInterval(slideNext,4000);
}
}
function showSlide(index){

  if(index>=slides.length){
    slideIndex=0;
  }
  else if(index < 0){
    slideIndex = slides.length-1;
  }

  slides.forEach(slide =>{
    slide.classList.remove("displaySlide");
  });
  
  slides[slideIndex].classList.add("displaySlide");
}

document.querySelector(".slides").onclick = function slideNext(){
  slideIndex++;
  showSlide(slideIndex);
}

