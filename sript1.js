const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var timeout;
function circlechapta() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        this.clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;
        circlemousefollower(xscale, yscale);

        timeout = setTimeout(
            function () {
                document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
            }, 100
        );
    });
}
function firstpageanimation() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInout
    })
        .to(".boundingelem", {
            y: 0,
            duration: 2,
            ease: Expo.easeInout,
            stagger: .2,
            delay: -1
        })
        .from("#herofooter", {
            y: '-10',
            opacity: 0,
            duration: 1.5,
            ease: Expo.easeInout,
            delay: -1
        })
}
function circlemousefollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}

circlechapta();
circlemousefollower();
firstpageanimation();

document.querySelectorAll(".element").forEach(function (element) {
    var rotate = 0;
    var diffrot = 0;

    element.addEventListener("mouseleave", function (dets) {

        gsap.to(element.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.8,
        });
    });
    element.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - element.getBoundingClientRect(), top;
        rotate = dets.clientX;
        diffrot = dets.clientX - rotate;

        gsap.to(element.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.6),
        });
    });
});


const app = new PIXI.Application();
document.querySelector('#landing').appendChild(app.view);

// Inner radius of the circle
const radius = 90;

// The blur amount
const blurSize = 52;

app.loader.add('landing', './imgs/bg.png');
app.loader.load(setup);

function setup(loader, resources) {
    const background = new PIXI.Sprite(resources.landing.texture);
    app.stage.addChild(background);
    background.width = app.screen.width;
    background.height = app.screen.height;

    const circle = new PIXI.Graphics()
        .beginFill(0xFF0000)
        .drawCircle(radius + blurSize, radius + blurSize, radius)
        .endFill();
    circle.filters = [new PIXI.filters.BlurFilter(blurSize)];

    const bounds = new PIXI.Rectangle(0, 0, (radius + blurSize) * 2, (radius + blurSize) * 2);
    const texture = app.renderer.generateTexture(circle, PIXI.SCALE_MODES.NEAREST, 1, bounds);
    const focus = new PIXI.Sprite(texture);

    app.stage.addChild(focus);
    background.mask = focus;

    app.stage.interactive = true;
    app.stage.on('mousemove', pointerMove);

    function pointerMove(event) {
        focus.position.x = event.data.global.x - focus.width / 2;
        focus.position.y = event.data.global.y - focus.height / 2;
    }
}

document.querySelector('#menuBtn').addEventListener('click', function () {
    document.querySelector('#slidingNavbar').style.left = '0';
});

document.querySelector('#closeBtn').addEventListener('click', function () {
    document.querySelector('#slidingNavbar').style.left = '-100%';
});



gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.text');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 20%',
      scrub: true,
    },
  });
});


function pageOneAnimation(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 1,
            pin: true,
            markers: false,
        }
    })
    
    tl
    .to("#circle #btm img", {
        rotate: "-180deg",
        scale: .6,
        stagger: .1,
        ease: Power1
    }, "same")
    .to("#circle #top img", {
        scale: .6,
        ease: Power1
    }, "same")
    .to("#home #gallery", {
        bottom: "-100%",
        ease: Power1
    }, "same")
    .to("#cimage img", {
        scale: 0,
        ease: Power1
    }, "same")
    .to("#centerimg h5", {
        opacity: 0,
        ease: Power1
    }, "same")
    .to("#circp", {
        top: "50%",
        scale: 2,
        ease: Power1
    }, "same")
    .to("#circle", {
        scale: .5,
        ease: Power1
    }, "same")
    .to("#smcircle", {
        scale: .6,
        ease: Power1
    }, "same")
    .to("#pinkflare", {
        bottom: "10%",
        rotate: 0,
        ease: Power1
    }, "same")
    .to("#circle", {
        scale: 0,
        ease: Power1
    }, "same2")
    .to("#smcircle", {
        scale: 0,
        ease: Power1
    }, "same2")
    .to("#circp", {
        opacity: 0,
        scale: .1,
        ease: Power1
    }, "same2")
    .to("#sidepurple", {
        top: 0,
        duration: 2,
        ease: Power1
    }, "same2")
    .to("#sidepurple", {
        top: "-150%",
        delay: .1,
        duration: 2,
        ease: Power1
    })
}

function pageTwoAnimation(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            pin: true,
            markers: false,
            scrub: 1,
            start: "top top"
        }
    })

    tl2.to(".circle", {
        top: "50%",
        stagger: .5,
        duration: 1,
        ease: Power1
    })
    .to(".circle", {
        left: "50%",
        duration: 1,
        ease: Power1
    })
    .to(".circle", {
        scale: 10,
        duration: 5,
        ease: Power1
    })
    .to(".pu", {
        background: `linear-gradient(to right, #D5A7B4, #B4AAD5)`,
        duration: 5,
        ease: Power1
    }, "a")
    .to("#stop h1", {
        left: "-150%",
        duration: 10,
        ease: Power1
    }, "a")
    .to("#stop h1", {
        left: "-150%",
        duration: 10,
        ease: Power1
    }, "a")
    .to("#p2", {
        opacity: 0,
        duration: 3,
        ease: Power1
    }, "a")
    .to("#p1", {
        opacity: 1,
        delay: 2,
        duration: 3,
        ease: Power1
    }, "a")
}

pageOneAnimation();
pageTwoAnimation();



