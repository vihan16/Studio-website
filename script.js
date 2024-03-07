// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top 27%",
        end:"top 0",
        scrub:3
    }
})
tl.to(".page1 h1", {
    x:-100,
    
},"anim")  //anim aayega//
tl.to(".page1 h2",{
  x:100
})
tl.to(".page1 video",{
  width:"90%"
},"anim")

var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      // markers:true,
      start:"top -110%",
      end:"top -150%",
      scrub:3
  }
})

tl2.to(".main", {
  backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1 ",
      scroller:".main",
      // markers:true,
      start:"top -230%",
      end:"top -250%",
      scrub:3
  }
})

tl3.to(".page3-part1 .img1",{
  x:-130,
})
tl3.to(".page3-part1 .img2",{
  x:130,
})

var tl4 = gsap.timeline({
  scrollTrigger:{
      trigger:".page1 h1",
      scroller:".main",
      // markers:true,
      start:"top -280%",
      end:"top -300%",
      scrub:3
  }
})

tl4.to(".main",{
  backgroundColor:"#0F0D0D"
})
