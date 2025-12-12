

//less comments after this section because it's pretty much all the same process. 

gsap.registerPlugin(ScrollTrigger); //Im registering the plugin for scrolltrigger so I can use scrolltrigger for my animations

// Check if an element with the class 'sr71' exists in the document (spoiler alert: it does lol).
//Note that the img isnt actually sr71 because i changed the img to another plane
if (document.querySelector('.sr71')) { 
    gsap.to(".sr71", { 
        scrollTrigger: {
            trigger: ".sr71", //I am specifying what the element is that triggers the animation  
            start: "top 10%",  // Animation starts when the top of '.sr71' reaches 10% from the top of the viewport
            end: "center 10%", // Animation ends when the center of '.sr71' reaches 10% from the top of the viewport
            scrub: 1, //smoother animation
            markers: false // Markers for fine tuning, it is false because I finished using it........
        },
        x: -2500, //how much x moves 
        rotation: 0, //how much rotation is
        duration: 10, //duration of animation 
        onUpdate: function() { //this code will make the opacity of .title to zero as you scroll down. 
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
    gsap.fromTo("#section1header", //This is a gsap.fromto, which is different from gsap.to.
        { x: -500, opacity: 0 }, //It defines both the starting and ending values for the animation. 
        {
            scrollTrigger: {
                trigger: ".section1", // selector or element
                start: "top 50%",  // [trigger] [scroller] positions
                end: "top 20%", // [trigger] [scroller] positions
                scrub: 1, // time (in seconds) to catch up. Can be set to true for the quickest option 
                markers: false,
            },
            x: 0,
            opacity: 1, //makes opacity to 1
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
        x:-2000, //The moving sky really is just a really large image moving to the left
        
    });
}

if (document.querySelector('.b2 img')) { //While a plane moves forward to give off the illusion of it flying through the sky 
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
