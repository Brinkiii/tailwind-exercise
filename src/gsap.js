gsap.from('.teaser', {duration: 1, opacity: 0, delay: 1, stagger: .25})

const myText = new SplitType('#my-text')
gsap.to('.char', {
    y: 0,
    stagger: .05,
    delay: 0.2,
    duration: .1
})

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.animated-element',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers: false
    }
})

tl.from('.animated-element', {
    x: '-110%'
})