gsap.registerPlugin(ScrollTrigger);

var music = document.getElementById("mp3");
        function mute(){
            music.muted = false;
            document.getElementById("mute").style.visibility = 'hidden';
            document.getElementById("unmuted").style.visibility = 'visible';
        }
        function unmute(){
            music.muted = true;
            document.getElementById("unmuted").style.visibility = 'hidden';
            document.getElementById("mute").style.visibility = 'visible';
        }


        function openNav() {
          document.getElementById("nave").style.transform = 'rotate(180deg)';
          document.getElementById("nave").style.visibility = "hidden";
          document.getElementById("mySidenav").style.width = "300px";
          document.getElementById("nave2").style.visibility = "visible";
          document.getElementById("nave2").style.transform = 'rotate(360deg)';
          
        }
        
        function closeNav() {
          document.getElementById("nave2").style.transform = 'rotate(180deg)';
          document.getElementById("nave2").style.visibility = "hidden";
          document.getElementById("nave").style.visibility = "visible";
          document.getElementById("nave").style.transform = 'rotate(0deg)';
          document.getElementById("mySidenav").style.width = "0";
          
        }
    function playMusic() { 
        music.play();
        } 
        gsap.to("#mp3",{
            scrollTrigger:{
                trigger: ".header",
                start: "top top",
                end : "+=12000px",
                onEnter:playMusic,
            
            }
        })
ScrollTrigger.matchMedia({
    "(min-width : 1025px)": function(){
        
        //head//
 gsap.to("#god",{
    y : -300,
    scrollTrigger:{
        scrub:4,
        trigger: ".header",
        start: "bottom bottom",
        end: "bottom top ",
       
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
//section1//
gsap.from("#H_khon",{
    x : -300,
    scrollTrigger:{
        scrub:4,
        trigger: ".section1",
        start: "top bottom",
        end: "center top ",
        
    }
})
gsap.from("#H_khon2",{
    x : 300,
    scrollTrigger:{
        scrub:4,
        trigger: ".section1",
        start: "top bottom",
        end: "center top ",
    }
})
gsap.from(".text_1",{
    y : 500,
    scrollTrigger:{
        scrub:4,
        trigger: ".section1",
        start: "top bottom",
        end: "center top ",
        
    }
})
gsap.from("#s1_ele8",{
    y : 300,
    transform : 'rotate(-90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section1",
        start: "top bottom",
        end: "top top ",
    
    }
})
gsap.from("#s1_ele9",{
    x : 300,
    transform : 'rotate(-90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section1",
        start: "top bottom",
        end: "top top ",
        
    }
})
//section2//
gsap.from(".text_2",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section2",
        start: "top bottom",
        end: "top top ",
        
    }
})
gsap.from("#s2_ele10",{
    x : -200,
    transform : 'rotate(-5deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section2",
        start: "top bottom",
        end: "center top ",

    }
})
gsap.from("#s2_ele11",{
    x : 200,
    transform : 'rotate(5deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section2",
        start: "top bottom",
        end: "center top ",
    }
})
//section3//
gsap.from(".text_3",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section3",
        start: "top bottom",
        end: "top top ",
        
        
    }
})
gsap.from(".text_4",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section3",
        start: "center bottom",
        end: "center top ",
        
    }
})
gsap.from("#s3_ele12",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section3",
        start: "top bottom",
        end: "bottom top ",

    }
})
gsap.from("#s3_ele13",{
    y : 400,
    scrollTrigger:{
        scrub:4,
        trigger: ".section3",
        start: "top bottom",
        end: "bottom top ",
        
    }
})
gsap.from("#s3_ele14",{
    x : 400,
    scrollTrigger:{
        scrub:4,
        trigger: ".section3",
        start: "top bottom",
        end: "bottom top ",
        
    }
})
gsap.from("#s3_ele15",{
    x :200,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section3",
        start: "center bottom",
        end: "center top ",
    }
})
//section4//
gsap.from(".text_5",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section4",
        start: "top bottom",
        end: "top top ",
        
        
    }
})
gsap.from(".text_6",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section4",
        start: "top bottom",
        end: "top top ",
        
        
    }
})
gsap.from("#s4_ele7",{
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section4",
        start: "top bottom",
        end: "center top ",

    }
})
gsap.from("#s4_cloud_6",{
    x : 400,
    scrollTrigger:{
        scrub:4,
        trigger: ".section4",
        start: "center bottom",
        end: "bottom top ",
        
    }
})
gsap.from("#s4_cloud_7",{
    x : -400,
    scrollTrigger:{
        scrub:4,
        trigger: ".section4",
        start: "center bottom",
        end: "bottom top ",
        
    }
})
gsap.from("#s4_cloud_8",{
    y :200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section4",
        start: "center bottom",
        end: "bottom top ",
    }
})
//section5//
gsap.from("#s5_ele16",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section5",
        start: "top bottom",
        end: "center top ",
    }
})
gsap.from("#s5_ele16_2",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section5",
        start: "top bottom",
        end: "center top ",   
    }
})
gsap.from("#s5_ele17",{
    y : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section5",
        start: "top bottom",
        end: "center top ",

    }
})
gsap.from("#s5_ele18",{
    y : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section5",
        start: "top bottom",
        end: "center top ",
        
    }
})
gsap.from("#s5_cloud_3",{
    x : 400,
    scrollTrigger:{
        scrub:4,
        trigger: ".section5",
        start: "center bottom",
        end: "bottom top ",
        
    }
})
gsap.from("#s5_cloud_6",{
    x :-400,
    scrollTrigger:{
        scrub:4,
        trigger: ".section5",
        start: "center bottom",
        end: "bottom top ",
        
    }
})
//section6//
gsap.from("#s6_rama1",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section6",
        start: "top bottom",
        end: "top top ",
        
        
    }
})
gsap.from(".text_7",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section6",
        start: "top bottom",
        end: "center top ",
    }
})
//section6//
gsap.from("#s7_rama2",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section7",
        start: "top bottom",
        end: "top top ",
        
        
    }
})
gsap.from(".text_8",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section7",
        start: "top bottom",
        end: "center top ",
    }
})
gsap.from("#s7_ele4",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section7",
        start: "center bottom",
        end: "bottom center ",   
    }
})
gsap.from("#s7_ele5",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section7",
        start: "center bottom",
        end: "bottom center ",
    }
})
gsap.from("#s7_ele6",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section7",
        start: "center bottom",
        end: "bottom center ",
    }
})
//section8//
gsap.from("#s8_rama3",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section8",
        start: "top bottom",
        end: "top top ",
    }
})
gsap.from(".text_9",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section8",
        start: "top bottom",
        end: "center top ",
    }
})
//section9//
gsap.from("#s9_rama4",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section9",
        start: "top bottom",
        end: "top top ",
    }
})
gsap.from(".text_10",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section9",
        start: "top bottom",
        end: "center top ",
    }
})
//section10//
gsap.from("#s10_rama5",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section10",
        start: "top bottom",
        end: "top top ",
    }
})
gsap.from(".text_11",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section10",
        start: "top bottom",
        end: "center top ",
    }
})
//section11//
gsap.from("#s11_rama6",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section11",
        start: "top bottom",
        end: "top top ",
    }
})
gsap.from(".text_12",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section11",
        start: "top bottom",
        end: "center top ",
    }
})
//section12//
gsap.from("#s12_khon_01",{
    x : -200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section12",
        start: "top bottom",
        end: "top top ",
    }
})
gsap.from("#s12_khon_05",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section12",
        start: "top bottom",
        end: "top top ",
    }
})
gsap.from(".text_13",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section12",
        start: "top bottom",
        end: "center top ",
    }
})
//section13//
gsap.from("#s13_rama7",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section13",
        start: "top bottom",
        end: "top top ",
    }
})
gsap.from(".text_14",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section13",
        start: "top bottom",
        end: "center top ",
    }
})
//section14//
gsap.from("#s14_rama8",{
    x : -200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section14",
        start: "top bottom",
        end: "top top ",
    }
})
gsap.from(".text_15",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section14",
        start: "top bottom",
        end: "center top ",
    }
})
//section15//
gsap.from("#s15_cloud_7",{
    x : -200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section15",
        start: "top bottom",
        end: "top center ",
    }
})
gsap.from("#s15_cloud_7_2",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section15",
        start: "top bottom",
        end: "top center ",
    }
})
gsap.from("#s15_cloud_7_3",{
    x : -200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section15",
        start: "top bottom",
        end: "center center ",
        
    }
})
gsap.from("#s15_cloud_7_4",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section15",
        start: "top bottom",
        end: "center center ",
    }
})
gsap.to("#s15_cloud_7_5",{
    x : -500,
    opacity :0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section15",
        start: "center bottom",
        end: "center top ",
        
    }
})
gsap.to("#s15_cloud_7_6",{
    x : 500,
    opacity :0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section15",
        start: "center bottom",
        end: "center top ",
    }
})
gsap.from("#s15_cloud_8",{
    y : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section15",
        start: "center bottom",
        end: "bottom top ",
    }
})
gsap.from("#s15_rama9",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section15",
        start: "center bottom",
        end: "center top ",
        
    }
})
//section16//
gsap.from(".text_16",{
    y : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section16",
        start: "top bottom",
        end: "bottom center ",
        
    }
})
//section17//
gsap.from(".text_17",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section17",
        start: "top bottom",
        end: "center top ",
    }
})
gsap.from("#s17_royal",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section17",
        start: "top bottom",
        end: "bottom top ",
        
    }
})
gsap.from("#s17_khon-02",{
    x : -200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section17",
        start: "40% bottom",
        end: "60% top ",
        
    }
})
gsap.from("#s17_khon-03",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section17",
        start: "40% bottom",
        end: "60% top ",
    }
})
gsap.from("#s17_cloudfull",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section17",
        start: "50% bottom",
        end: "100% top ",
    }
})
//section18//
gsap.from("#s18_rama10",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section18",
        start: "top bottom",
        end: "top top ",
    }
})
gsap.from(".text_18",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section18",
        start: "top bottom",
        end: "center top ",
    }
})
//section19//
gsap.from("#s19_ele16",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section19",
        start: "top bottom",
        end: "center top ",
    }
})
gsap.from("#s19_ele16_2",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section19",
        start: "top bottom",
        end: "center top ",   
    }
})
gsap.from("#s19_ele17",{
    y : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section19",
        start: "top bottom",
        end: "center top ",

    }
})
gsap.from("#s19_ele18",{
    y : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section19",
        start: "top bottom",
        end: "center top ",
        
    }
})
gsap.from("#s19_cloud_3",{
    x : -400,
    scrollTrigger:{
        scrub:4,
        trigger: ".section19",
        start: "center bottom",
        end: "bottom top ",
        
    }
})
//section20//
gsap.from("#s20_ele23",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section20",
        start: "top bottom",
        end: "center top ",
        
    }
})
gsap.from(".text_19",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section20",
        start: "top bottom",
        end: "center top ",
        
    }
})
gsap.from("#s20_ele24",{
    x : 100,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section20",
        start: "top bottom",
        end: "center top ",
        
    }
})
gsap.from("#s20_cloud10",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section20",
        start: "center bottom",
        end: "center top ",
        
    }
})
//section21//
gsap.from(".text_20",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "top bottom",
        end: "center top ",
        
    }
})
gsap.from("#s21_ele1",{
    y : 200,
    x : -400,
    transform : 'rotate(60deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "top bottom",
        end: "center top ",
        
    }
})
gsap.from("#s21_ele2",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "top bottom",
        end: "center top ",
    }
})
gsap.from("#s21_ele3",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "center bottom",
        end: "bottom top ",
    }
})
gsap.from("#s21_ele14",{
    x : 200,
    y : 200,
    transform : 'rotate(-60deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "center bottom",
        end: "bottom top ",
    }
})
gsap.from("#s21_ele25",{
    x : -200,
    y : 300,
    transform : 'rotate(-60deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "center bottom",
        end: "70% top ",
    }
})
gsap.from("#s21_ele25_2",{
    x : -200,
    y : 300,
    transform : 'rotate(-60deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "center bottom",
        end: "70% top ",
    }
})
gsap.from("#s21_ele26",{
    x : -200,
    y : 300,
    transform : 'rotate(-60deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "center bottom",
        end: "bottom top ",
    }
})
gsap.from("#s21_ele26_2",{
    x : -200,
    y : 300,
    transform : 'rotate(-60deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "center bottom",
        end: "bottom top ",
    }
})
gsap.from("#s21_ele27",{
    x : 200,
    y : 300,
    transform : 'rotate(-60deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "center bottom",
        end: "bottom top ",
        
    }
})
//section22//
gsap.from(".text_21",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section22",
        start: "top bottom",
        end: "30% top ",
    }
})
//section23//
gsap.from(".text_22",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section23",
        start: "top bottom",
        end: "30% top ",
    }
})
    },
    "(max-width : 1024px)": function(){
        
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
//section1//
gsap.from("#H_khon",{
    x : -300,
    scrollTrigger:{
        scrub:4,
        trigger: ".section1",
        start: "top center",
        end: "center top ",
        
    }
})
gsap.from("#H_khon2",{
    x : 300,
    scrollTrigger:{
        scrub:4,
        trigger: ".section1",
        start: "top center",
        end: "center top ",
    }
})
gsap.from(".text_1",{
    y : 500,
    scrollTrigger:{
        scrub:4,
        trigger: ".section1",
        start: "top center",
        end: "center top ",
        
    }
})
gsap.from("#s1_ele8",{
    y : 500,
    x : -200,
    transform : 'rotate(-90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section1",
        start: "top center",
        end: "top top ",
    
    }
})
gsap.from("#s1_ele9",{
    x : 1200,
    transform : 'rotate(-90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section1",
        start: "top center",
        end: "top top ",
        
    }
})
//section2//
gsap.from(".text_2",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section2",
        start: "center bottom",
        end: "top top ",
        
    }
})
gsap.from("#s2_ele10",{
    x : -200,
    transform : 'rotate(-5deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section2",
        start: "center bottom",
        end: "bottom center ",
    }
})
gsap.from("#s2_ele11",{
    x : 200,
    transform : 'rotate(5deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section2",
        start: "center bottom",
        end: "bottom center ",
    }
})
//section3//
gsap.from(".text_3",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section3",
        start: "top bottom",
        end: "top top ",
        
        
    }
})
gsap.from(".text_4",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section3",
        start: "center bottom",
        end: "center top ",
        
    }
})
gsap.from("#s3_ele12",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section3",
        start: "top bottom",
        end: "bottom top ",

    }
})
gsap.from("#s3_ele13",{
    y : 400,
    scrollTrigger:{
        scrub:4,
        trigger: ".section3",
        start: "top bottom",
        end: "bottom top ",
        
    }
})
gsap.from("#s3_ele14",{
    x : 400,
    scrollTrigger:{
        scrub:4,
        trigger: ".section3",
        start: "top bottom",
        end: "bottom top ",
        
    }
})
gsap.from("#s3_ele15",{
    x :200,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section3",
        start: "center bottom",
        end: "center top ",
    }
})
//section4//
gsap.from(".text_5",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section4",
        start: "top bottom",
        end: "top top ",
        
        
    }
})
gsap.from(".text_6",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section4",
        start: "top bottom",
        end: "top top ",
        
        
    }
})
gsap.from("#s4_ele7",{
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section4",
        start: "top bottom",
        end: "center top ",

    }
})
gsap.from("#s4_cloud_6",{
    x : 400,
    scrollTrigger:{
        scrub:4,
        trigger: ".section4",
        start: "center bottom",
        end: "bottom top ",
        
    }
})
gsap.from("#s4_cloud_7",{
    x : -400,
    scrollTrigger:{
        scrub:4,
        trigger: ".section4",
        start: "center bottom",
        end: "bottom top ",
        
    }
})
gsap.from("#s4_cloud_8",{
    y :200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section4",
        start: "center bottom",
        end: "bottom top ",
    }
})
//section5//
gsap.from("#s5_ele16",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section5",
        start: "top bottom",
        end: "center top ",
        
    }
})
gsap.from("#s5_ele16_2",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section5",
        start: "top bottom",
        end: "center top ",   
    }
})
gsap.from("#s5_ele17",{
    y : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section5",
        start: "top bottom",
        end: "center top ",

    }
})
gsap.from("#s5_ele18",{
    y : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section5",
        start: "top bottom",
        end: "center top ",
        
    }
})
gsap.from("#s5_cloud_3",{
    x : 400,
    scrollTrigger:{
        scrub:4,
        trigger: ".section5",
        start: "center bottom",
        end: "bottom top ",
        
    }
})
gsap.from("#s5_cloud_6",{
    x :-400,
    scrollTrigger:{
        scrub:4,
        trigger: ".section5",
        start: "center bottom",
        end: "bottom top ",
        
    }
})
//section6//
gsap.from("#s6_rama1",{
    x : 100,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section6",
        start: "top bottom",
        end: "bottom center ",
        
    }
})
gsap.from(".text_7",{
    x : -100,
    scrollTrigger:{
        scrub:4,
        trigger: ".section6",
        start: "top bottom",
        end: "bottom center ",
    }
})
//section7//
gsap.from("#s7_rama2",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section7",
        start: "top bottom",
        end: "bottom center ",
        
        
    }
})
gsap.from(".text_8",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section7",
        start: "top bottom",
        end: "bottom center ",
    }
})
gsap.from("#s7_ele4",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section7",
        start: "center bottom",
        end: "bottom center ",   
    }
})
gsap.from("#s7_ele5",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section7",
        start: "center bottom",
        end: "bottom center ",
    }
})
gsap.from("#s7_ele6",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section7",
        start: "center bottom",
        end: "bottom center ",
    }
})
//section8//
gsap.from("#s8_rama3",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section8",
        start: "top bottom",
        end: "bottom center ",
        
    }
})
gsap.from(".text_9",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section8",
        start: "top bottom",
        end: "bottom center ",
    }
})
//section9//
gsap.from("#s9_rama4",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section9",
        start: "top bottom",
        end: "bottom center ",
        
    }
})
gsap.from(".text_10",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section9",
        start: "top bottom",
        end: "bottom center ",
    }
})
//section10//
gsap.from("#s10_rama5",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section10",
        start: "top bottom",
        end: "bottom center ",
        
    }
})
gsap.from(".text_11",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section10",
        start: "top bottom",
        end: "bottom center ",
    }
})
//section11//
gsap.from("#s11_rama6",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section11",
        start: "top bottom",
        end: "bottom center ",
        
    }
})
gsap.from(".text_12",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section11",
        start: "top bottom",
        end: "bottom center ",
    }
})
//section12//
gsap.from("#s12_khon_01",{
    x : -200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section12",
        start: "top bottom",
        end: "bottom center ",
        
    }
})
gsap.from("#s12_khon_05",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section12",
        start: "top bottom",
        end: "bottom center ",
    }
})
gsap.from(".text_13",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section12",
        start: "top bottom",
        end: "center top ",
    }
})
//section13//
gsap.from("#s13_rama7",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section13",
        start: "top bottom",
        end: "center top ",
        
    }
})
gsap.from(".text_14",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section13",
        start: "top bottom",
        end: "center top ",
    }
})
//section14//
gsap.from("#s14_rama8",{
    x : -200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section14",
        start: "top bottom",
        end: "center top ",
        
    }
})
gsap.from(".text_15",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section14",
        start: "top bottom",
        end: "center top ",
    }
})
//section15//
gsap.from("#s15_cloud_7",{
    x : -200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section15",
        start: "top bottom",
        end: "top center ",
        
    }
})
gsap.from("#s15_cloud_7_2",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section15",
        start: "top bottom",
        end: "top center ",
    }
})
gsap.from("#s15_cloud_7_3",{
    x : -200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section15",
        start: "top bottom",
        end: "center center ",
        
    }
})
gsap.from("#s15_cloud_7_4",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section15",
        start: "top bottom",
        end: "center center ",
    }
})
gsap.to("#s15_cloud_7_5",{
    x : -500,
    opacity :0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section15",
        start: "center bottom",
        end: "center top ",
        
    }
})
gsap.to("#s15_cloud_7_6",{
    x : 500,
    opacity :0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section15",
        start: "center bottom",
        end: "center top ",
    }
})
gsap.from("#s15_cloud_8",{
    y : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section15",
        start: "center bottom",
        end: "center top ",
    }
})
gsap.from("#s15_rama9",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section15",
        start: "center bottom",
        end: "center top ",
        
    }
})
//section16//
gsap.from(".text_16",{
    y : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section16",
        start: "top bottom",
        end: "bottom center ",
       
        
    }
})
//section17//
gsap.from(".text_17",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section17",
        start: "top bottom",
        end: "center top ",
        
    }
})
gsap.from("#s17_royal",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section17",
        start: "top bottom",
        end: "bottom top ",
        
    }
})
gsap.from("#s17_khon-02",{
    x : -200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section17",
        start: "50% bottom",
        end: "100% center ",
        
    }
})
gsap.from("#s17_khon-03",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section17",
        start: "50% bottom",
        end: "100% center ",
    }
})
gsap.from("#s17_cloudfull",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section17",
        start: "50% bottom",
        end: "100% top ",
    }
})
//section18//
gsap.from("#s18_rama10",{
    x : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section18",
        start: "top bottom",
        end: "center top ",
        
    }
})
gsap.from(".text_18",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section18",
        start: "top bottom",
        end: "center top ",
    }
})
//section19//
gsap.from("#s19_ele16",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section19",
        start: "top bottom",
        end: "center top ",
    }
})
gsap.from("#s19_ele16_2",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section19",
        start: "top bottom",
        end: "center top ",   
    }
})
gsap.from("#s19_ele17",{
    y : 200,
    opacity : 0,
    scrollTrigger:{
        scrub:4,
        trigger: ".section19",
        start: "top bottom",
        end: "center top ",

    }
})
gsap.from("#s19_ele18",{
    y : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section19",
        start: "top bottom",
        end: "center top ",
        
    }
})
gsap.from("#s19_cloud_3",{
    x : -400,
    scrollTrigger:{
        scrub:4,
        trigger: ".section19",
        start: "center bottom",
        end: "bottom top ",
        
    }
})
//section20//
gsap.from("#s20_ele23",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section20",
        start: "top bottom",
        end: "center top ",
        
    }
})
gsap.from(".text_19",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section20",
        start: "top bottom",
        end: "bottom center ",
        
    }
})
gsap.from("#s20_ele24",{
    x : 100,
    transform : 'rotate(90deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section20",
        start: "top bottom",
        end: "bottom center ",
        
    }
})
gsap.from("#s20_cloud10",{
    x : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section20",
        start: "center bottom",
        end: "center top ",
        
    }
})
//section21//
gsap.from(".text_20",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "top bottom",
        end: "bottom center ",
        
        
    }
})
gsap.from("#s21_ele1",{
    y : 200,
    x : -400,
    transform : 'rotate(60deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "top bottom",
        end: "center 30% ",
        
    }
})
gsap.from("#s21_ele2",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "top bottom",
        end: "bottom center ",
    }
})
gsap.from("#s21_ele3",{
    x : -200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "center bottom",
        end: "bottom top ",
    }
})
gsap.from("#s21_ele14",{
    x : 200,
    y : 200,
    transform : 'rotate(-60deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "center bottom",
        end: "bottom top ",
    }
})
gsap.from("#s21_ele25",{
    x : -200,
    y : 300,
    transform : 'rotate(-60deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "center bottom",
        end: "70% top ",
    }
})
gsap.from("#s21_ele25_2",{
    x : -200,
    y : 300,
    transform : 'rotate(-60deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "center bottom",
        end: "70% top ",
    }
})
gsap.from("#s21_ele26",{
    x : -200,
    y : 300,
    transform : 'rotate(-60deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "center bottom",
        end: "bottom top ",
    }
})
gsap.from("#s21_ele26_2",{
    x : -200,
    y : 300,
    transform : 'rotate(-60deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "center bottom",
        end: "bottom top ",
    }
})
gsap.from("#s21_ele27",{
    x : 200,
    y : 300,
    transform : 'rotate(-60deg)',
    scrollTrigger:{
        scrub:4,
        trigger: ".section21",
        start: "center bottom",
        end: "bottom top ",
        
    }
})
//section22//
gsap.from(".text_21",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section22",
        start: "top bottom",
        end: "bottom center ",
        
    }
})
//section23//
gsap.from(".text_22",{
    y : 200,
    scrollTrigger:{
        scrub:4,
        trigger: ".section23",
        start: "top bottom",
        end: "top center ",
        
    }
})
    }
})
