var clos = document.querySelector("#close-icon");
var ope = document.querySelector("#open-icon");
var bigback = document.querySelector("#page1-left-bigback");

ope.addEventListener("click",()=>{
    bigback.classList.add("openback");
    bigback.classList.remove("closeback");
})

clos.addEventListener("click", () => {
  bigback.classList.add("closeback");
  bigback.classList.remove("openback");
})
