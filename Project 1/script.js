gsap.to('.moving-left',{
    xPercent: -100,
    duration:15,
    repeat:-1,
    ease:"linear",
})

gsap.to('.moving-right',{
    xPercent: 100,
    duration:15,
    repeat:-1,
    ease:"linear",
})


// gsap.to('.right',{
//     x:200,
//     duration:4,
//     repeat:Infinity,
//     ease:"linear",
// })