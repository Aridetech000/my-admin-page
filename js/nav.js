function navbutton() {
    var home = document.querySelector(".hom");
    var about = document.querySelector(".abou");
    var contact = document.querySelector(".contac");
    var services = document.querySelector(".service");


    home.addEventListener("click", () => {
        home.classList.remove("nav-black");
        home.classList.add("nav-blue");
        
    })
}
navbutton();
