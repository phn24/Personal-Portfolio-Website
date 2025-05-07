gsap.to(".name", {
  color: "#809FFF",
  duration: 1,
  delay:1,
})

 // Register ScrollTrigger plugin with GSAP
 gsap.registerPlugin(ScrollTrigger);
  
 // Initialize a new Lenis instance for smooth scrolling
 const lenis = new Lenis();

 // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
 lenis.on('scroll', ScrollTrigger.update);

 // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
 gsap.ticker.add((time) => {
   lenis.raf(time * 1000); // Convert time from seconds to milliseconds
 });

 // Disable lag smoothing in GSAP to prevent any delay in scroll animations
 gsap.ticker.lagSmoothing(0);

 const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('mainMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});