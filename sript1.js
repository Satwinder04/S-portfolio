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
                rotate : gsap.utils.clamp(-20, 20, diffrot * 0.6),
            });
        });
    });

