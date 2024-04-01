
/**
 * 
 * @param {gsap} gsap 
 * @param {object} obj - the object to tween
 * @param {number} x - the x position to tween to
 * @param {number} [duration=1] - the duration of the tween in seconds
 * @param {boolean} [yoyo=false] - whether to yoyo the tween
 * @param {string} [ease='none'] - the easing function to use
 * @param {number} [repeat=0] - the number of times to repeat the tween
 */

const shiftTo = (gsap, obj, properties) => {
    gsap.to(obj, properties)
}

export {
    shiftTo,
}