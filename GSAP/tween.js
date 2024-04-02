
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

const gshift = (gsap, obj, method, properties) => {
    if (method === 'to') {
        gsap.to(obj, properties)
    } else if (method === 'fromTo') {
        gsap.fromTo(obj, properties.duration || 1, properties.from, properties.to, properties.pos || 0)
    } else if (method === 'from') {
        gsap.from(obj, properties)
    }
}

export {
    gshift,
}