function HomePageAnimation() {

    gsap.set(".slides_no", {
        scale: 7
    })


    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: .3
        }
    })

    tl.to(".video_div", {
        '--clip': "0%",
        ease: Power2


    }, "a")
        .to(".slides_no", {
            scale: 1,
            ease: Power2
        }, "a")
        .to(".lft", {
            xPercent: -10,
            ease: Power2,
            stagger: .1
        }, "b")
        .to(".rgt", {
            xPercent: 10,
            ease: Power2,
            stagger: .1
        }, "b")


}

function realPageAnimation() {

    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            // markers:true,
            scrub: 2
        },
        xPercent: -200,
        ease: Power4
    })
}

function moving() {

    document.querySelectorAll(".listEle")
        .forEach(function (el) {
            el.addEventListener("mousemove", function (dets) {
                gsap.to(this.querySelector(".circle"), { opacity: 1, x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX), duration: .2 })
            })



            el.addEventListener("mouseleave", function (dets) {
                gsap.to(this.querySelector(".circle"), { opacity: 0, duration: .2 })

            })
        })

}

function femail() {

    var cluter = ""
    document.querySelector(".textpara")
    .textContent.split("")
    .forEach(function (e) {
        if (e === " ") cluter += `<span>&nbsp</span>`
        cluter += `<span>${e}</span>`
        
    })
    document.querySelector(".textpara").innerHTML = cluter;
    
    gsap.set(".textpara  span", { opacity: .1 })
    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 50%",
            end: "bottom 90%",
            scrub:.01
        },
        opacity: 1,
        stagger: .03,
        ease: Power4
    })
    
}

function a(){
var cluter=""
document.querySelector(".sign")
.textContent.split("").forEach(function(e){
    if(e === " ")cluter +=`<span>&nbsp</span>`
    cluter +=`<span>${e}</span>`
})
document.querySelector(".sign").innerHTML=cluter
 
gsap.set(".sign span", { opacity: .01 })
gsap.to(".sign span", {
    scrollTrigger: {
        trigger: ".ltext",
        start: "top 40%",
        end: "bottom 40%",
        scrub:.1
    },
    opacity: 1,
    stagger: .3,
    ease: Power4
})


    var cluter=""
    document.querySelector(".lorem")
    .textContent.split("").forEach(function(e){
        if(e === " ")cluter +=`<span>&nbsp</span>`
    cluter +=`<span>${e}</span>`
})
document.querySelector(".lorem").innerHTML=cluter

gsap.set(".lorem span", { opacity: .1 })
gsap.to(".lorem span", {
    scrollTrigger: {
        trigger: ".rtext",
        start: "top 40%",
        end: "bottom 40%",
        scrub:.1
    },
    opacity: 1,
    stagger: .3,
    ease: Power4
})
}


function loco(){

    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}


// document.querySelectorAll(".section")
// .forEach(function(e){
//     ScrollTrigger.create({
//         trigger:e,
//         start:"top 50%",
//         end:"bottom 10%",
//         markers:true,
//         onEnter:function(){
//             document.body.setAttribute("theme",e.dataset.color);
//         },
//         onEnterBack:function(){
//             document.body.setAttribute("theme",e.dataset.color);

//         }
//     })
// })
loco()

a()
femail()
HomePageAnimation()
realPageAnimation()
moving()
