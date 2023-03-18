var modal = document.getElementById('myModal');
        var modal2 = document.getElementById('myModal2');
        var span = document.getElementsByClassName("close")[0];
        var span2 = document.getElementsByClassName("closed")[0];
        span.onclick = function() { 
       modal.style.display = "none";
        }
        span2.onclick = function() { 
       modal2.style.display = "none";
        }

        var img = document.getElementsByName('head1');
        var modalImg = document.getElementById("img_01");
        var i;
        for (i = 0; i < img.length; i++) {
            img[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
   }
}
        var img2 = document.getElementsByName('head2');
        var modalImg2 = document.getElementById("img_02");
        var i;
        for (i = 0; i < img2.length; i++) {
            img2[i].onclick = function(){
            modal2.style.display = "block";
            modalImg2.src = this.src;
   }
}


var vid = document.getElementById("myVideo");
function playVid() { 
    vid.play();
  } 
  function playVid2() { 
    vid.pause();
    vid.currentTime = 0;
    vid.play();
    
  } 
  function pauseVid() { 
    vid.pause();
  } 



gsap.registerPlugin(ScrollTrigger);



ScrollTrigger.matchMedia({
    "(min-width : 1025px)": function(){
        gsap.to("#myVideo",{
            scrollTrigger:{
                trigger: ".section1",
                start: "top center",
                end: "center top ",
                onEnter:playVid2,
                onEnterBack:playVid2,
                onLeave:pauseVid,
                onLeaveBack:pauseVid,
            }
        })
        //head//
 gsap.to("#god",{
    y : -300,
    scrollTrigger:{
        scrub:4,
        trigger: ".header",
        start: "bottom bottom",
        end: "bottom top ",
        markers: true,
    }
})
gsap.to("#H_cloud1",{
    x : 300,
    scrollTrigger:{
        scrub:4,
        trigger: ".header",
        start: "bottom bottom",
        end: "bottom top ",
    }
})
gsap.to("#H_cloud3",{
    x : 100,
    scrollTrigger:{
        scrub:4,
        trigger: ".header",
        start: "bottom bottom",
        end: "bottom top ",
    }
})
gsap.to("#H_cloud2",{
    x : -100,
    scrollTrigger:{
        scrub:4,
        trigger: ".header",
        start: "bottom bottom",
        end: "bottom top ",
        
    }
})
gsap.to("#H_cloud4",{
    x : 50,
    scrollTrigger:{
        scrub:4,
        trigger: ".header",
        start: "bottom bottom",
        end: "bottom top ",
    }
})
gsap.to("#ele18",{
    x : 1000,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".header",
        start: "bottom bottom",
        end: "bottom top ",
    }
})
gsap.to("#ele19",{
    x : -500,
    transform : 'rotate(-90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".header",
        start: "bottom bottom",
        end: "bottom top ",
    }
})
//section1
gsap.from("#ele3",{
    y : 500,
    scrollTrigger:{
        scrub:3,
        trigger: ".section1",
        start: "top center",
        end: "center top ",
        
    }
})
gsap.from("#ele5",{
    y : 1000,
    scrollTrigger:{
        scrub:2,
        trigger: ".section1",
        start: "top center",
        end: "10% top ",
    }
})
gsap.from("#text1",{
    y : 200,
    opacity:0,
    scrollTrigger:{
        scrub:3,
        trigger: ".section1",
        start: "top center",
        end: "top top ",
    }
})
gsap.to("#ele_clound1",{
    x : -300,
    scrollTrigger:{
        scrub:3,
        trigger: ".section1",
        start: "center bottom",
        end: "bottom top ",
    }
})
gsap.to("#ele10",{
    y : -1000,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:3,
        trigger: ".section1",
        start: "center center",
        end: "bottom top ",
    }
})
gsap.to("#ele11",{
    y : -500,
    transform : 'rotate(-90deg)',
    scrollTrigger:{
        scrub:3,
        trigger: ".section1",
        start: "center center",
        end: "bottom top ",
    }
})
gsap.to("#ele16",{
    x : 500,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:3,
        trigger: ".section1",
        start: "center center",
        end: "bottom top ",
    }
})
//section2
gsap.from("#H_khon",{
    opacity:0,
    x:-100,
    scrollTrigger:{
        scrub:4,
        trigger: ".section2",
        start: "30% 100%",
        end: "50% 0% ",
    }
})
gsap.to(".Name_opacity",{
    opacity:1,
    y:0,
    scrollTrigger:{
        scrub:4,
        trigger: ".Name_opacity",
        start: "top 100%",
        end: "top 50% ",
    }
})
gsap.to(".icon_flower",{
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".RGraphic",
        start: "top 100%",
        end: "top 0% ",
    }
})
gsap.to(".RGraphic",{
    x: 0,
    opacity:1,
    scrollTrigger:{
        scrub:4,
        trigger: ".RGraphic",
        start: "top bottom",
        end: "top cener ", 
    }
})
gsap.to("#cloud1",{
    x: 500,
    scrollTrigger:{
        scrub:3,
        trigger: ".RGraphic",
        start: "bottom 100%",
        end: "bottom 50% ",
    }
})
//section3
gsap.from("#text2",{
    y : 300,
    opacity:0,
    scrollTrigger:{
        scrub:3,
        trigger: ".section3",
        start: "top center",
        end: "top top ",
    }
})
gsap.from("#ele15",{
    x : -250,
    scrollTrigger:{
        scrub:3,
        trigger: ".section2",
        start: "bottom bottom",
        end: "bottom top ",
    }
    
})
gsap.from("#ele14",{
    x : 100,
    scrollTrigger:{
        scrub:2,
        trigger: ".section3",
        start: "center bottom",
        end: "center top ",
    }
})
gsap.from("#s3_cloud2",{
    x : -500,
    opacity:0,
    scrollTrigger:{
        scrub:3,
        trigger: ".section3",
        start: "center bottom",
        end: "center top ",
    }
})
//section4
gsap.from("#H_khon2",{
    opacity:0,
    x: 100,
    scrollTrigger:{
        scrub:4,
        trigger: ".section4",
        start: "top 100%",
        end: "50% 0% ",
        
    }
})

gsap.to(".Name_opacity2",{
    opacity:1,
    y:0,
    scrollTrigger:{
        scrub:4,
        trigger: ".Name_opacity2",
        start: "top 100%",
        end: "top 50% ",
    }
})
gsap.to(".icon_flower2",{
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".Name_opacity2",
        start: "top 100%",
        end: "top 0% ",
    }
})
gsap.to(".LGraphic",{
    x: 0,
    opacity:1,
    scrollTrigger:{
        scrub:4,
        trigger: ".LGraphic",
        start: "top bottom",
        end: "top cener ", 
    }
})
//section5
gsap.from("#s5_cloud1",{
    x : -500,
    scrollTrigger:{
        scrub:3,
        trigger: ".section5",
        start: "top bottom",
        end: "top top ",
    }
})
gsap.from("#s5_ele3",{
    y : 300,
    transform : 'rotate(-90deg)',
    scrollTrigger:{
        scrub:2,
        trigger: ".section5",
        start: "center bottom",
        end: "center top ",
    }
})
gsap.from("#s5_ele3-2",{
    y : 500,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:2,
        trigger: ".section5",
        start: "center bottom",
        end: "center top ",

    }
})
gsap.from("#s5_ele5",{
    x : -300,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:2,
        trigger: ".section5",
        start: "bottom bottom",
        end: "center top ",
    }
})
gsap.from("#text3",{
    y : 200,
    opacity:0,
    scrollTrigger:{
        scrub:3,
        trigger: ".section5",
        start: "top center",
        end: "top top ",
    }
    
})
gsap.from("#s5_ele13",{
    x : 200,
    opacity:0,
    scrollTrigger:{
        scrub:3,
        trigger: ".section5",
        start: "center bottom",
        end: "center top ",
    }
    
})
gsap.from("#s5_cloud2",{
    x : 500,
    opacity:0,
    scrollTrigger:{
        scrub:3,
        trigger: ".section5",
        start: "bottom bottom",
        end: "bottom top ",
        
    }
    
})
//section6
gsap.from("#H_khon3",{
    opacity:0,
    x:-100,
    scrollTrigger:{
        scrub:4,
        trigger: ".section6",
        start: "30% 100%",
        end: "50% 0% ",
    }
})

gsap.to(".Name_opacity3",{
    opacity:1,
    y:0,
    scrollTrigger:{
        scrub:4,
        trigger: ".Name_opacity3",
        start: "top 100%",
        end: "top 50% ",
    }
})
gsap.to(".icon_flower3",{
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".Name_opacity3",
        start: "top 100%",
        end: "top 0% ",
    }
})
gsap.to(".RGraphic2",{
    x: 0,
    opacity:1,
    scrollTrigger:{
        scrub:4,
        trigger: ".RGraphic2",
        start: "top bottom",
        end: "top cener ", 
    }
})
gsap.from("#s6_ele10",{
    y: 400,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section6",
        start: "center 100%",
        end: "center 50% ", 
    }
})
gsap.from("#s6_ele11",{
    y: 400,
    x: 400,
    transform : 'rotate(-90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".RGraphic2",
        start: "top 100%",
        end: "top 50% ", 

    }
})
//section7
gsap.from("#s7_cloud1",{
    x : 500,
    scrollTrigger:{
        scrub:3,
        trigger: ".section7",
        start: "top bottom",
        end: "top top ",
        
    }
    
})
gsap.from("#s7_ele8",{
    y : 500,
    x : -500,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:2,
        trigger: ".section7",
        start: "center bottom",
        end: "center top ",
       
    }
})
gsap.from("#s7_ele12",{
    x : 300,
    opacity :0,
    transform : 'rotate(-60deg)',
    scrollTrigger:{
        scrub:2,
        trigger: ".section7",
        start: "center bottom",
        end: "center top ",
    }
})
gsap.from("#s7_ele14",{
    x : -500,
    opacity :0,
    scrollTrigger:{
        scrub:2,
        trigger: ".section7",
        start: "top bottom",
        end: "top top ",

    }
})
gsap.from("#text4",{
    y : 200,
    opacity:0,
    scrollTrigger:{
        scrub:3,
        trigger: ".section7",
        start: "top center",
        end: "top top ",
    }
    
})
gsap.from("#s7_ele8",{
    y : 500,
    x : -500,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:2,
        trigger: ".section7",
        start: "center bottom",
        end: "center top ",
       
    }
})

gsap.from("#s7_ele9",{
    y : 300,
    x : 500,
    transform : 'rotate(-90deg)',
    scrollTrigger:{
        scrub:3,
        trigger: ".section7",
        start: "center bottom",
        end: "center top ",
    }
    
})
gsap.from("#s7_cloud2",{
    x : -500,
    scrollTrigger:{
        scrub:3,
        trigger: ".section7",
        start: "bottom bottom",
        end: "bottom top ",
        
    }
})
//section8
gsap.from("#H_khon4",{
    opacity:0,
    x: 100,
    scrollTrigger:{
        scrub:4,
        trigger: ".section8",
        start: "top 100%",
        end: "50% 0% ",
        
    }
})

gsap.to(".Name_opacity4",{
    opacity:1,
    y:0,
    scrollTrigger:{
        scrub:4,
        trigger: ".Name_opacity4",
        start: "top 100%",
        end: "top 50% ",
    }
})
gsap.to(".icon_flower4",{
    transform : 'rotate(-90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".Name_opacity4",
        start: "top bottom",
        end: "top center ",
    }
})
gsap.to(".LGraphic2",{
    x: 0,
    opacity:1,
    scrollTrigger:{
        scrub:4,
        trigger: ".LGraphic2",
        start: "top bottom",
        end: "top cener ", 
    }
})
gsap.from("#s8_ele2",{
    x : -300,
    opacity:0,
    transform : 'rotate(45deg)',
    scrollTrigger:{
        scrub:2,
        trigger: ".section8",
        start: "center bottom",
        end: "30% top ",
    }
})
    }
})
ScrollTrigger.matchMedia({
    "(max-width : 1024px)": function(){
    gsap.to("#myVideo",{
        scrollTrigger:{
            trigger: "#myVideo",
            start: "top center",
            end: "bottom top ",
            onEnter:playVid2,
            onEnterBack:playVid2,
            onLeave:pauseVid,
            onLeaveBack:pauseVid,
            }
        })
        //head//
 gsap.to("#god",{
    y : -300,
    scrollTrigger:{
        scrub:4,
        trigger: ".header",
        start: "top top",
        end: "bottom top ",
        
    }
})
gsap.to("#H_cloud1",{
    x : 300,
    scrollTrigger:{
        scrub:4,
        trigger: ".header",
        start: "top top",
        end: "bottom top ",
    }
})
gsap.to("#H_cloud3",{
    x : 100,
    scrollTrigger:{
        scrub:4,
        trigger: ".header",
        start: "top top",
        end: "bottom top ",
    }
})
gsap.to("#H_cloud2",{
    x : -100,
    scrollTrigger:{
        scrub:4,
        trigger: ".header",
        start: "top top",
        end: "bottom top ",
        
    }
})
gsap.to("#H_cloud4",{
    x : 50,
    scrollTrigger:{
        scrub:4,
        trigger: ".header",
        start: "top top",
        end: "bottom top ",
    }
})
gsap.to("#ele18",{
    x : 1000,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".header",
        start: "top top",
        end: "bottom top ",
    }
})
gsap.to("#ele19",{
    x : -500,
    transform : 'rotate(-90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".header",
        start: "top top",
        end: "bottom top ",
    }
})
//section1

gsap.to("#ele_clound1",{
    x : -300,
    scrollTrigger:{
        scrub:3,
        trigger: ".section1",
        start: "top top",
        end: "bottom top ",
        
        
    }
})

//section2
gsap.from("#H_khon",{
    opacity:0,
    x:-100,
    scrollTrigger:{
        scrub:4,
        trigger: ".section2",
        start: "top center",
        end: "bottom top ",
        
    }
})

gsap.to(".RGraphic",{
    x: 0,
    opacity:1,
    scrollTrigger:{
        scrub:4,
        trigger: ".RGraphic",
        start: "top bottom",
        end: "top cener ", 
    }
})
gsap.to("#cloud1",{
    x: 500,
    scrollTrigger:{
        scrub:3,
        trigger: ".RGraphic",
        start: "center 100%",
        end: "bottom 0% ",
       
    }
})
//section3
gsap.from("#text2",{
    y : 300,
    opacity:0,
    scrollTrigger:{
        scrub:3,
        trigger: ".section3",
        start: "top center",
        end: "top top ",
    }
})
gsap.from("#ele15",{
    x : -250,
    scrollTrigger:{
        scrub:3,
        trigger: "#ele15",
        start: "center bottom",
        end: "bottom top ",
    }
    
})
gsap.from("#ele14",{
    x : 300,
    scrollTrigger:{
        scrub:2,
        trigger: "#ele14",
        start: "top bottom",
        end: "bottom top ",
        
    }
})
gsap.from("#s3_cloud2",{
    x : -500,
    opacity:0,
    scrollTrigger:{
        scrub:3,
        trigger: "#s3_cloud2",
        start: "center bottom",
        end: "bottom top ",
        
    }
})
//section4
gsap.from("#H_khon2",{
    opacity:0,
    x: 100,
    scrollTrigger:{
        scrub:4,
        trigger: ".section4",
        start: "center 100%",
        end: "50% 0% ",
    }
})

gsap.to(".Name_opacity2",{
    opacity:1,
    y:0,
    scrollTrigger:{
        scrub:4,
        trigger: ".Name_opacity2",
        start: "top 100%",
        end: "top 0% ",
    }
})
gsap.to(".icon_flower2",{
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".Name_opacity2",
        start: "top 100%",
        end: "top 0% ",
    }
})
gsap.to(".LGraphic",{
    x: 0,
    opacity:1,
    scrollTrigger:{
        scrub:4,
        trigger: ".LGraphic",
        start: "top bottom",
        end: "top cener ", 
    }
})
//section5
gsap.from("#s5_cloud1",{
    x : -500,
    scrollTrigger:{
        scrub:3,
        trigger: ".section5",
        start: "top bottom",
        end: "top top ",
    }
})
gsap.from("#s5_ele3",{
    y : 300,
    transform : 'rotate(-90deg)',
    scrollTrigger:{
        scrub:2,
        trigger: ".section5",
        start: "center bottom",
        end: "center top ",
    }
})
gsap.from("#s5_ele3-2",{
    y : 500,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:2,
        trigger: ".section5",
        start: "center bottom",
        end: "center top ",

    }
})
gsap.from("#s5_ele5",{
    x : -300,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:2,
        trigger: ".section5",
        start: "bottom bottom",
        end: "center top ",
    }
})
gsap.from("#text3",{
    y : 200,
    opacity:0,
    scrollTrigger:{
        scrub:3,
        trigger: ".section5",
        start: "top center",
        end: "top top ",
    }
    
})
gsap.from("#s5_ele13",{
    x : 200,
    opacity:0,
    scrollTrigger:{
        scrub:3,
        trigger: ".section5",
        start: "center bottom",
        end: "center top ",
    }
    
})
gsap.from("#s5_cloud2",{
    x : 500,
    opacity:0,
    scrollTrigger:{
        scrub:3,
        trigger: ".section5",
        start: "bottom bottom",
        end: "bottom top ",
        
    }
    
})
//section6
gsap.from("#H_khon3",{
    opacity:0,
    x:-100,
    scrollTrigger:{
        scrub:4,
        trigger: ".section6",
        start: "30% 100%",
        end: "50% 0% ",
    }
})

gsap.to(".Name_opacity3",{
    opacity:1,
    y:0,
    scrollTrigger:{
        scrub:4,
        trigger: ".Name_opacity3",
        start: "top 100%",
        end: "top 0% ",
    }
})
gsap.to(".icon_flower3",{
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".Name_opacity3",
        start: "top 100%",
        end: "top 0% ",
    }
})
gsap.to(".RGraphic2",{
    x: 0,
    opacity:1,
    scrollTrigger:{
        scrub:4,
        trigger: ".RGraphic2",
        start: "top bottom",
        end: "top cener ", 
    }
})
gsap.from("#s6_ele10",{
    y: 400,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section6",
        start: "center 100%",
        end: "center 0% ", 
    }
})
gsap.from("#s6_ele11",{
    y: 400,
    x: 400,
    transform : 'rotate(-90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".RGraphic2",
        start: "top 100%",
        end: "top 0% ", 

    }
})
//section7
gsap.from("#s7_cloud1",{
    x : 500,
    scrollTrigger:{
        scrub:3,
        trigger: ".section7",
        start: "top bottom",
        end: "top top ",
        
    }
    
})
gsap.from("#s7_ele8",{
    y : 500,
    x : -500,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:2,
        trigger: ".section7",
        start: "center bottom",
        end: "center top ",
       
    }
})
gsap.from("#s7_ele12",{
    x : 300,
    opacity :0,
    transform : 'rotate(-60deg)',
    scrollTrigger:{
        scrub:2,
        trigger: ".section7",
        start: "center bottom",
        end: "center top ",
    }
})
gsap.from("#s7_ele14",{
    x : -500,
    opacity :0,
    scrollTrigger:{
        scrub:2,
        trigger: ".section7",
        start: "top bottom",
        end: "top top ",

    }
})
gsap.from("#text4",{
    y : 200,
    opacity:0,
    scrollTrigger:{
        scrub:3,
        trigger: ".section7",
        start: "top center",
        end: "top top ",
    }
    
})
gsap.from("#s7_ele8",{
    y : 500,
    x : -500,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:2,
        trigger: ".section7",
        start: "center bottom",
        end: "center top ",
       
    }
})

gsap.from("#s7_ele9",{
    y : 300,
    x : 500,
    transform : 'rotate(-90deg)',
    scrollTrigger:{
        scrub:3,
        trigger: ".section7",
        start: "center bottom",
        end: "center top ",
    }
    
})
gsap.from("#s7_cloud2",{
    x : -500,
    scrollTrigger:{
        scrub:3,
        trigger: ".section7",
        start: "bottom bottom",
        end: "bottom top ",
        
    }
})
//section8
gsap.from("#H_khon4",{
    opacity:0,
    x: 100,
    scrollTrigger:{
        scrub:4,
        trigger: ".section8",
        start: "top 100%",
        end: "50% 0% ",
        
    }
})

gsap.to(".Name_opacity4",{
    opacity:1,
    y:0,
    scrollTrigger:{
        scrub:4,
        trigger: ".Name_opacity4",
        start: "top 100%",
        end: "top 0% ",
        
    }
})
gsap.to(".icon_flower4",{
    transform : 'rotate(-90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".Name_opacity4",
        start: "top bottom",
        end: "top 0% ",
        
    }
})
gsap.to(".LGraphic2",{
    x: 0,
    opacity:1,
    scrollTrigger:{
        scrub:4,
        trigger: ".LGraphic2",
        start: "top bottom",
        end: "top cener ", 
    }
})
gsap.from("#s8_ele2",{
    x : -300,
    opacity:0,
    transform : 'rotate(45deg)',
    scrollTrigger:{
        scrub:2,
        trigger: ".section8",
        start: "center bottom",
        end: "30% top ",
    }
})
    }
})


















var img = new Image();
img.onload = waves;
img.src = "//i.imgur.com/PwzfNTk.png";

function waves() {

  var canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d"),
    w = canvas.width,
    h = canvas.height;

  ctx.drawImage(this, 0, 0);

  var o1 = new Osc(0.05), o2 = new Osc(0.03), o3 = new Osc(0.06),
      x0 = 0, x1 = w * 0.25, x2 = w * 0.5, x3 = w * 0.75, x4 = w;

  (function loop() {
    ctx.clearRect(0, 0, w, h);
    for (var y = 0; y < h; y++) {

      // segment positions
      var lx1 = x1 + o1.current(y * 0.2) * 3; // scaled to enhance demo effect
      var lx2 = x2 + o2.current(y * 0.2) * 3;
      var lx3 = x3 + o3.current(y * 0.2) * 3;

      // segment widths
      var w0 = lx1;
      var w1 = lx2 - lx1;
      var w2 = lx3 - lx2;
      var w3 = x4 - lx3;

      // draw image lines ---- source ----   --- destination ---
      ctx.drawImage(img, x0, y, x1     , 1,  0        , y, w0, 1);
      ctx.drawImage(img, x1, y, x2 - x1, 1,  lx1 - 0.5, y, w1, 1);
      ctx.drawImage(img, x2, y, x3 - x2, 1,  lx2 - 1  , y, w2, 1);
      ctx.drawImage(img, x3, y, x4 - x3, 1,  lx3 - 1.5, y, w3, 1);
    }
    requestAnimationFrame(loop);
  })();
}

function Osc(speed) {

  var frame = 0;

  this.current = function(x) {
    frame += 0.002 * speed;
    return Math.sin(frame + x * speed * 10);
  };
}
