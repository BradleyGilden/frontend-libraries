import { shiftTo } from "./tween.js";

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,EaselPlugin,TextPlugin);

    const screenWidth = window.innerWidth;

    // Calculate 100vw - 10rem
    const adjustedWidth = screenWidth - (10 * parseFloat(getComputedStyle(document.documentElement).fontSize));
    
    shiftTo(gsap, '.square', {
        x: adjustedWidth,
        duration: 2,
        yoyo: true,
        ease: 'power2.out',
        repeat:-1,
        rotation: 90,
        backgroundColor: 'purple'
    })
});
