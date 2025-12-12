gsap.registerPlugin(ScrollTrigger);


if (document.querySelector('.sr71')) {
    gsap.to(".sr71", {
        scrollTrigger: {
            trigger: ".sr71",
            start: "top 10%",
            end: "center 10%",
            scrub: 1,
            markers: false
        },
        x: -2500,
        rotation: 0,
        duration: 10,
        onUpdate: function() {
            const titleEl = document.querySelector('.title');
            if (titleEl) {
                const progress = this.progress();
                const opacity = 1 - progress;
                titleEl.style.opacity = opacity;

            }
        }
    });
}



if (document.querySelector('#section1header')) {
    gsap.fromTo("#section1header",
        { x: -500, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".section1",
                start: "top 50%",
                end: "top 20%",
                scrub: 1,
                markers: false,
            },
            x: 0,
            opacity: 1,
            duration: 1
        }
    );
}


if (document.querySelector('.section1 #section1hook')) {
    gsap.fromTo(".section1 #section1hook",
        { x: -1000, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".section1 #section1hook",
                start: "top 80%",
                end: "top 50%",
                scrub: 3,
                markers: false
            },
            x: 0,
            opacity: 1,
            duration: 5
        }
    );
}

if (document.querySelector('.section1 #section1p')) {
    gsap.fromTo(".section1 #section1p",
        { x: 300, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".section1 #section1p",
                start: "top 80%",
                end: "top 50%",
                scrub: 3,
                markers: false


            },
            x: 0,
            opacity: 1,
            duration: 5
        }
    );
}

if (document.querySelector('.frontviewplane img')) {
    gsap.to (".frontviewplane img", {
        scrollTrigger: {
            trigger: ".title",
            start: "500px 50%",
            end: "1500px 50%",
            scrub: 3,
            markers: false
        },
        y: 300,
        scale:20,
        rotation: 360,
        duration: 5
    });
}

if (document.querySelector('.dynamicsky img')) {
    gsap.to(".dynamicsky img", {
        scrollTrigger: {
            trigger:".dynamicsky img",
            start: "center 50%",
            end: "6000px 50%",
            scrub: 1,
            markers: false,
            pin:true,
        },
        x:-2000,
        
    });
}

if (document.querySelector('.b2 img')) {
    gsap.to(".b2 img", {
        scrollTrigger: {
            trigger:".b2",
            start: "center 50%",
            end: "5900px 50%",
            scrub: 1,
            markers: false,
            pin: true,
        },
        x:2300,
        scale:2,
        rotation:-10
    });
}

if (document.querySelector('.discover1')) {
    gsap.fromTo(".discover1",
        { x: -1000, opacity: 0 },
        {
            scrollTrigger: {
                trigger: ".discover1",
                start: "7000px 50%",
                end: "7000px 50%",
                scrub: 3,
                markers: false
            },
            x: 0,
            opacity: 1,
            duration: 5
        }
    );
}