  //______________________________________ local storage ______________________________________

  let boxColor,
    boxA,
    slidBg,
    boxShadow,
    mainColor,
    mainBgColor,
    mainShadow;

    boxColor=getFromLocalStorage("boxColor");
    boxA=getFromLocalStorage("boxA");
    slidBg=getFromLocalStorage("slidBg" );
    mainColor=getFromLocalStorage("mainColor" );
    mainShadow=getFromLocalStorage("mainShadow" );
    mainBgColor=getFromLocalStorage("mainBgColor");
    mainShadow=getFromLocalStorage("mainShadow");
     
      
    $(".box").css("color",`${boxColor}`);
    $(".slide").css("color", `${slidBg}`);
    $("html").css("--mainColor",`${mainColor}`);
    $("html").css("--mainBgColor",`${mainBgColor}`);
    $("html").css("--mainShadow",`${mainShadow}`);
    $(".box").find("form a").css("color",`${boxA}`);
         
     
$("button.theme").click(function () {

  //__________________________set dark values
 
  if ($("html").css("--mainColor") == $("html").css("--lightColor")) {
    
    $(".box").css("color", "#fff");
    $(".box").find("form a").css("color", "#0e1628");
    $(".slide").css("color", "#0e1628");
    $("html").css("--mainColor", $("html").css("--darkColor"));
    $("html").css("--mainBgColor", $("html").css("--darkBgColor"));
    $("html").css("--mainShadow", $("html").css("--darkShadow"));

    boxColor=$(".box").css("color") ;
    boxA=$(".box").find("form a").css("color");
    slidBg=$(".slide").css("color");
    mainColor=$("html").css("--mainColor");
    mainBgColor=$("html").css("--mainBgColor");
    mainShadow=$("html").css("--mainShadow");
        
    setInLocalStorage("boxColor",boxColor);
    setInLocalStorage("boxA",boxA);
    setInLocalStorage("slidBg",slidBg);
    setInLocalStorage("mainColor",mainColor);
    setInLocalStorage("mainBgColor",mainBgColor);
    setInLocalStorage("mainShadow",mainShadow);

  } 
  
  //__________________________set light values
  
  else {
    
    $(".box").find("form a").css("color", "#fff");
    $(".slide").css("color", "#fff");
    $("html").css("--mainColor", $("html").css("--lightColor"));
    $("html").css("--mainBgColor", $("html").css("--lightBgColor"));
    $("html").css("--mainShadow", $("html").css("--lightShadow"));

    boxA=$(".box").find("form a").css("color");
    slidBg=$(".slide").css("color");
    mainColor=$("html").css("--mainColor");
    mainBgColor=$("html").css("--mainBgColor");
    mainShadow=$("html").css("--mainShadow");
         
    setInLocalStorage("boxA",boxA);
    setInLocalStorage("slidBg",slidBg);
    setInLocalStorage("mainColor",mainColor);
    setInLocalStorage("mainBgColor",mainBgColor);
    setInLocalStorage("mainShadow",mainShadow);
  }

});



let after=$("nav.navbar ul .after"),
    navLinks=document.querySelectorAll("nav.navbar ul li");
    after.css("width",$(navLinks).eq(0).outerWidth(true));

navLinks.forEach(function(linkJS){
    let link=$(linkJS);
    link.click(function(){
        let linkLeft=link.offset().left;
        console.log(linkLeft);
        after.offset({
            left:(linkLeft),
            configurable: true
        })
        after.css("width",link.outerWidth(true))
    })
});

let iconOfSideBar=$(".sideBar ul li i");
    closeIcon=$(".sideBar i.close");

if ($(window).outerWidth(true) > 768) {
  iconOfSideBar.click(function(){
    $(".sideBar").css("width","200px");
    $(".sideBar").css("background-color","#303030");
    $(".sideBar ul li span").delay(500).css("opacity","1").fadeIn();
    iconOfSideBar.css("font-size","20px");
    closeIcon.css("opacity","1");
  });

  closeIcon.click(function(){
    $(".sideBar").css("width","150px");
    $(".sideBar").css("background-color","transparent");
    $(".sideBar ul li span").fadeOut();
    iconOfSideBar.css("font-size","40px");
    closeIcon.css("opacity","0");

  });
}

 

