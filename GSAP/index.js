import { gshift } from "./tween.js";

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,EaselPlugin,TextPlugin);

    const screenWidth = window.innerWidth;

    // Calculate 100vw - 10rem
    const adjustedWidth = screenWidth - (10 * parseFloat(getComputedStyle(document.documentElement).fontSize));
    
    // bouncing square
    gshift(gsap, '.square', 'to', {
        x: adjustedWidth,
        duration: 2,
        yoyo: true,
        ease: 'bounce.in',
        repeat:-1,
        rotation: 90,
        backgroundColor: 'purple',
    })

    gshift(gsap, '.square', 'to', {
        duration: 2,
        borderRadius: '0px',
        ease: 'expo.out',
        repeat: -1,
        yoyo: true,
    })

    // typewriter effect
    gshift(gsap, '#typewriter', 'fromTo', {
        duration: 6,
        from: {
            width: '0',
        },
        to: {
            width: '24.09rem',
            ease: 'steps(29)',
        }
    });

    // cursor
    gshift(gsap, '#typewriter', 'fromTo', {
        duration: 0.5,
        from: {
            borderRightColor: 'rgba(255,255,255,0.75)',
        },
        to: {
            borderRightColor: 'rgba(255,255,255,0)',
            repeat: -1,
            ease: 'steps(29)'
        }
    })
});
