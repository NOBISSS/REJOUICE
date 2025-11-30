function initLocoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

initLocoScroll();

function CursorAnim() {
    var cursor = document.querySelector("#cursor");
    var page1Con = document.querySelector("#page1");
    var pg4ball = document.querySelector("#page4");
    var cursor2 = document.querySelector("#page4 #cursor2");

    page1Con.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })

    page1Con.addEventListener("mousemove", function () {
        gsap.to(cursor, {
            scale: 1
        })
    })

    page1Con.addEventListener("mouseleave", function () {
        gsap.to(cursor, {
            scale: 0
        })
    })

    //page4 CURSOR ANIMATION PART
    pg4ball.addEventListener("mousemove", function (dets) {
        gsap.to(cursor2, {
            x: dets.x,
            y: dets.y
        })
    })

    pg4ball.addEventListener("mousemove", function () {
        gsap.to(cursor2, {
            scale: 1
        })
    })

    pg4ball.addEventListener("mouseleave", function () {
        gsap.to(cursor2, {
            scale: 0
        })
    })



}
CursorAnim();

function Page2AnimMine() {
    var pg2 = document.querySelector("#page2");
    var box = document.querySelector(".box");
    var spans = document.querySelector("#page2 #pg2prt2 .box h2 span");
    gsap.from("#page2 #pg2prt2 .box h2", {
        opacity: 0,
        y: 80,
        scrollTrigger: {
            trigger: ".box h2",
            scroller: "body",
            start: "top 70%",
            end: "bottom 80%",
            scrub: 2
        },
        stagger: {
            amount: 0.1
        }
    })
}

function Pg2Anim() {
    gsap.from(".box h2", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            //  markers:true,
            scrub: 2
        }
    })

}
Pg2Anim();

function LineAnim() {
    gsap.from("#page3 #page3-bottom #line", {
        width: "0%",
        color: "red",

        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            // markers:true,
            start: "end 90%",
            end: "top 90%",
            scrub: 2,
        }
    })
}


function Pg3TxtAnim() {
    gsap.from("#page3-bottom h4", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page3-bottom",
            scroller: "#main",
            start: "top 90%",
            end: "top 100%",
            // markers:true,
            scrub: 2
        }
    })


    gsap.from("#page3-bottom #pg3-btm h2", {
        y: 120,
        stagger: 0.2,
        duration: 2,
        scrollTrigger: {
            trigger: "#page3-bottom",
            scroller: "#main",
            start: "top 70%",
            end: "top 70%",
            //   markers:true,
            scrub: 2
        }

    })
}
//     gsap.from("#page3 #page3top h2",{
//     y:120,
//     stagger:0.2,
//     duration:2,
//     scrollTrigger:{
//         trigger:"#page3",
//         scroller:"body",
//         start:"end 10%",
//         end:"top 70%",
//        markers:true,
//         scrub:2
// }    

// })

Pg3TxtAnim();

function Pg4Anim() {
    gsap.from("#page4 #page4-bottom #pg4-btm h2", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page4-bottom",
            scroller: "#main",
            start: "top 85%",
            end: "top 75%",
            //  markers:true,
            scrub: 2
        }
    })

    gsap.from("#page4 #page4-bottom h4", {
        y: 120,
        stagger: 0.2,
        duration: 0.7,
        scrollTrigger: {
            trigger: "#page4-bottom",
            scroller: "#main",
            start: "top 85%",
            end: "top 75%",
            //  markers:true,
            scrub: 2
        }
    })
}

Pg4Anim();


function Swiperjs() {
    var swiper = new Swiper(".mySwiper", {
        //slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
    });
}
Swiperjs();

function Loader() {

    var tl = gsap.timeline();

    tl.from("#loader h3", {
        delay: 1,
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    })

    tl.to("#loader h3", {
        opacity: 0,
        x: -40,
        duration: 1,
        stagger: 0.1,
    })

    tl.to("#loader", {
        opacity: 0
    })

    tl.from("#page1 #page1nav h1 span", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        delay: -0.5
    })

    tl.to("#loader", {
        display: "none"
    })
}
Loader();

gsap.from("#footer #ft-bottom h1 span", {
    y: -50,
    opacity: 0,
    stagger: 0.2,


    scrollTrigger: {
        duration: 2,
        // markers:true,
        trigger: "#footer",
        scroller: "#main",
        scrub: 5,
        start: "top 15%",
        end: "top 12%"
    }

})










