var crsr=document.querySelector("#cursor");
var blurrycrsr=document.querySelector("#blurryCursor");
// var leftcoma=document.querySelector("#page04 #left");
// var rightcoma=document.querySelector("#page04 #right");
document.addEventListener("mousemove",(dets)=>{
    // crsr.style.left=dets.x-10+"px";
    // crsr.style.top=dets.y-10+"px";
    // blurrycrsr.style.left=dets.x-150+"px";
    // blurrycrsr.style.top=dets.y-150+"px";
    gsap.to("#cursor",{
        left:dets.x-10+"px",
        top:dets.y-10+"px",
    })
    gsap.to("#blurryCursor",{
        left:dets.x-150+"px",
        top:dets.y-150+"px",
    })
})
var boxesall=document.querySelectorAll("#boxes div");
boxesall.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        crsr.style.scale = 3;
        crsr.style.backgroundColor="transparent";
        crsr.style.boxShadow="0 0 0 0.2px white";
        elem.style.cursor="pointer";
    })
    elem.addEventListener("mouseleave",()=>{
        crsr.style.scale = 1;
        crsr.style.backgroundColor="#95C11E";
        crsr.style.boxShadow="0 0 0 0px white";
    })
})
var footerall=document.querySelectorAll("#footer-content ul li");
footerall.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        crsr.style.scale = 3;
        crsr.style.backgroundColor="transparent";
        crsr.style.boxShadow="0 0 0 0.2px white";
        elem.style.cursor="pointer";
        elem.style.color="white";
    })
    elem.addEventListener("mouseleave",()=>{
        crsr.style.scale = 1;
        crsr.style.backgroundColor="#95C11E";
        crsr.style.boxShadow="0 0 0 0px white";
        elem.style.color="black";
    })
})
function addHoverEffect(element){
    element.forEach((elem)=>{
        var heading = elem;
        elem.addEventListener("mouseenter",()=>{
            crsr.style.scale = 3;
            crsr.style.backgroundColor="transparent";
            crsr.style.boxShadow="0 0 0 0.2px white";
            heading.style.color="black";
            elem.style.cursor="pointer";
        })
        elem.addEventListener("mouseleave",()=>{
            crsr.style.scale = 1;
            crsr.style.backgroundColor="#95C11E";
            crsr.style.boxShadow="0 0 0 0px white";
            heading.style.color="white";
        })
    })
}
addHoverEffect(document.querySelectorAll("#nav h4"));
addHoverEffect(document.querySelectorAll("#cards .card"));
addHoverEffect(document.querySelectorAll("#img-scroller01"));
// addHoverEffect(document.querySelectorAll("#footer-content ul li"));
gsap.to("#nav",{
    backgroundColor:"#000",
    height:"15%",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -8%",
        end:"top -11%",
        scrub:1.5
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        start:"top -20%",
        end:"top -80%",
        scrub:1
    }
})
gsap.from("#about-us img,#about-us-content",{
    y:80,
    opacity:0,
    // duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 0%",
        scrub:2
    }
})
gsap.from(".card",{
    opacity:0.5,
    scale:0.9,
    duration:0.7,
    scrollTrigger:{
        trigger:"#cards",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        // markers: true,
        scrub:true
    }
})
gsap.from("#page04 #left",{
    y:-25,
    x:-50,
    scrollTrigger:{
        trigger:"#left",
        scroller:"body",
        start:"top 95%",
        end:"top 70%",
        // markers: true,
        scrub:1
    }
})
gsap.from("#page04 #right",{
    y:20,
    x:20,
    scrollTrigger:{
        trigger:"#right",
        scroller:"body",
        start:"top 95%",
        end:"top 70%",
        // markers: true,
        scrub:1
    }
})
gsap.from("#page05 h3",{
    y:50,
    scrollTrigger:{
        trigger:"#page05 h3",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
        scrub:2
    }
})

