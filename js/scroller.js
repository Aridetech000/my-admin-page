const carousel = document.querySelector(".teachers");

const dragging = (e) =>{
  carousel.scrollLeft = e.pageX;
}

carousel.addEventListener("mousemove", dragging);