var about = document.querySelector(".about-inner span");

about.addEventListener("mousemove", () => {
  gsap.to(".about-inner span h1", {
    y: -70,
    duration: 1,
  })
  gsap.to("#point", {
    scale: 8,
    duration: 1,
  })

})

about.addEventListener("mouseleave", () => {
  gsap.to(".about-inner span h1", {
    y: 0,
    duration: 1,
  })
  gsap.to("#point", {
    scale: 1,
    duration: 1,
  })
})