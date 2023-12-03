var opan = document.querySelector(".open");
var clos = document.querySelector(".clos");
var openb = document.querySelector("openb");
var openn = document.querySelector("openn");
var nav = document.querySelector(".headernav .nav2")

opan.addEventListener("click", () => {
  opan.classList.add("openn");
  opan.classList.remove("openb");
  clos.classList.remove("openn");
  clos.classList.add("openb");
  nav.classList.add("navopen");
  nav.classList.remove("nav2");
});
clos.addEventListener("click", () => {
  opan.classList.remove("openn");
  opan.classList.add("openb");
  clos.classList.add("openn");
  clos.classList.remove("openb");
  nav.classList.remove("navopen");
  nav.classList.add("nav2");
})




function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  /*
  // --- RED PANEL ---
  gsap.from(".line-1", {
    scrollTrigger: {
      trigger: ".line-1",
      scroller: ".smooth-scroll",
      scrub: true,
      start: "top bottom",
      end: "top top",
      onUpdate: self => console.log(self.direction)
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none"
  });
  
  
  // --- ORANGE PANEL ---
  gsap.from(".line-2", {
    scrollTrigger: {
      trigger: ".orange",
      scroller: ".smooth-scroll",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    },
    scaleX: 0, 
    transformOrigin: "left center", 
    ease: "none"
  });
  
  
  // --- PURPLE/GREEN PANEL ---
  var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".purple",
        scroller: ".smooth-scroll",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%"
      }
    });
  
  tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
    .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
    .to(".purple", {backgroundColor: "#28a92b"}, 0);
  
  
  */


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

locomotive();

var point = document.getElementById("point");
var fram1 = document.getElementById("nav");


window.addEventListener("mousemove", (data) => {
  gsap.to(point, {
    x: data.clientX,
    y: data.clientY,
    duration: .3,
    ease: Expo,
  })
})
fram1.addEventListener("mousemove", (data) => {
  gsap.to(point, {
    scale: 8,
    duration: 1,
  })
  gsap.to(".navname", {
    color: "#fff",
    duration: 1,
  })
  gsap.to(".navname h5", {
    color: "#fff",
    duration: 1,
  })
})

fram1.addEventListener("mouseleave", (deta) => {
  gsap.to(point, {
    scale: 1,
    duration: 1,
  })
  gsap.to(".navname", {
    color: "#000",
    duration: 1,
  })
  gsap.to(".navname h5", {
    color: "#000",
    duration: 1,
  })
})


gsap.from("#card-one", {
  x: -500,
  duration: 1.3,
  ease: "ease",
  scrollTrigger: {
    trigger: "#card-one",
    scroller: "#main",
    start: "top 50%",
    end: "top 10%",
    // markers: true,
  }

})
gsap.from("#card-two", {
  scale: 0,
  duration: 1.3,
  ease: "ease",
  scrollTrigger: {
    trigger: "#card-two",
    scroller: "#main",
    start: "top 90%",
    end: "top 10%",
    // markers: true,
  }

})
gsap.from("#card-three", {
  x: 500,
  duration: 1.3,
  ease: "ease",
  scrollTrigger: {
    trigger: "#card-three",
    scroller: "#main",
    start: "top 50%",
    end: "top 10%",
    // markers: true,
  }

})
gsap.from(".imgbox-one", {
  scale: 0,
  duration: 1.3,
  ease: "ease",
  scrollTrigger: {
    trigger: ".imgbox-one",
    scroller: "#main",
    start: "top 50%",
    end: "top 10%",
    // markers: true,
  }

})

