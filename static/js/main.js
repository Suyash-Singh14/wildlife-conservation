let button1 = document.querySelector('.slide-indicator:nth-child(1)');
let button2 = document.querySelector('.slide-indicator:nth-child(2)');
let button3 = document.querySelector('.slide-indicator:nth-child(3)');
let button4 = document.querySelector('.slide-indicator:nth-child(4)');
let buttons = document.querySelector('.slide-indicators')

let slide1 = document.querySelector('.slide-text:nth-child(1)')
let slide2 = document.querySelector('.slide-text:nth-child(2)')
let slide3 = document.querySelector('.slide-text:nth-child(3)')
let slide4 = document.querySelector('.slide-text:nth-child(4)')


let ImgSlide1 = document.querySelector('.image-slide:nth-child(1)')
let ImgSlide2 = document.querySelector('.image-slide:nth-child(2)')
let ImgSlide3 = document.querySelector('.image-slide:nth-child(3)')
let ImgSlide4 = document.querySelector('.image-slide:nth-child(4)')


buttons.addEventListener('mouseleave', function(){
    slide1.classList.remove('hidden');
    ImgSlide1.classList.remove('hidden');
})

function hide1(){
    slide1.classList.add("hidden");
    ImgSlide1.classList.add('hidden');
}

button1.addEventListener('mouseover', function(){
    slide1.classList.remove('hidden');
    ImgSlide1.classList.remove('hidden');
})

button1.addEventListener('mouseleave', function(){
    slide1.classList.add("hidden");
    ImgSlide1.classList.add('hidden');
})

button2.addEventListener('mouseover', function(){
    slide2.classList.remove("hidden");
    ImgSlide2.classList.remove('hidden');
    hide1();
})

button2.addEventListener('mouseleave', function(){
    slide2.classList.add("hidden");
    ImgSlide2.classList.add('hidden');
})

button3.addEventListener('mouseover', function(){
    slide3.classList.remove("hidden");
    ImgSlide3.classList.remove('hidden');
    hide1();
})

button3.addEventListener('mouseleave', function(){
    slide3.classList.add("hidden");
    ImgSlide3.classList.add('hidden');
})

button4.addEventListener('mouseover', function(){
    slide4.classList.remove("hidden");
    ImgSlide4.classList.remove('hidden');
    hide1();
})

button4.addEventListener('mouseleave', function(){
    slide4.classList.add("hidden");
    ImgSlide4.classList.add('hidden');
})

//  animations
gsap.from('.top', {duration: 1, y:'-20%', opacity:'0', ease: "power2.out", delay:1});
gsap.from('.mid', {duration: 2, y:'10%', opacity:'0', ease: "power2.out", delay:1.5});
gsap.from('.bottom .left', {duration: 1, x:'-10%', opacity:'0', ease: "power2.out", delay:1});
gsap.from('.bottom .right', {duration: 1, x:'10%', opacity:'0', ease: "power2.out", delay:1});


// scroll animations
gsap.from(".about", {
    scrollTrigger: {
        trigger: ".about", 
        start: "top center",
        ease: "power2.in"
    },
    y: 200,
    opacity:0,
    duration:1
});

gsap.from(".text-left", {
    scrollTrigger: {
        trigger: ".blog", 
        start: "top center",
        ease: "power2.in"
    },
    x: -200,
    opacity:0,
    duration: 1
});

gsap.from(".deer", {
    scrollTrigger: {
        trigger: ".blog", 
        start: "top center",
        ease: "power2.in"
    },
    scale: 0.6,
    opacity:0,
    duration:1
});

gsap.from(".container-right", {
    scrollTrigger: {
        trigger: ".blog", 
        start: "top center",
        ease: "power2.in"
    },
    x: 200,
    opacity:0,
    duration:1
});

