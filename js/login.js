let registerButton = $(".registerButton"),
  loginButton = $(".loginButton"),
  slide = document.querySelector(".slide");
//_____________________________________ css style

if ($(window).outerWidth(true) < 992) {
  $(".slide").css("border-radius", "80px 80px 30px 30px");
} else {
  $(".slide").css("border-radius", "80px 30px 30px 80px");
}
if ($(window).outerWidth(true) < 992) {
  $(".slide").css("border-radius", "30px 30px 80px 80px");
} else {
  $(".slide").css("border-radius", "30px 80px 80px 30px");
}

registerButton.click(function () {
  $(".slide-left").css("display", "none");
  $(".slide-left").css("opacity", "0");
  $(".slide-right").css("display", "block");

  if ($(window).outerWidth(true) < 992) {
    slide.classList.add("animate_height");
    setTimeout(function () {
      $(".slide-right").css("opacity", "1");
      $(".slide").css("top", "auto");
      $(".slide").css("bottom", "0%");
      $(".slide").css("border-radius", "80px 80px 30px 30px");
    }, 500);
    setTimeout(function () {
      slide.classList.remove("animate_height");
    }, 1000);
  } else {
    slide.classList.add("animate_width");
    setTimeout(function () {
      $(".slide-right").css("opacity", "1");
      $(".slide").css("left", "auto");
      $(".slide").css("right", "0%");
      $(".slide").css("border-radius", "80px 30px 30px 80px");
    }, 500);
    setTimeout(function () {
      slide.classList.remove("animate_width");
    }, 1000);
  }
});

loginButton.click(function () {
  $(".slide-left").css("display", "block");
  $(".slide-right").css("display", "none");
  if ($(window).outerWidth(true) < 992) {
    slide.classList.add("animate_height");
    setTimeout(function () {
      $(".slide-left").css("opacity", "1");
      $(".slide-right").css("opacity", "0");
      $(".slide").css("bottom", "auto");
      $(".slide").css("top", "0%");
      $(".slide").css("border-radius", "30px 30px 80px 80px");
    }, 500);
    setTimeout(function () {
      slide.classList.remove("animate_height");
    }, 1000);
  } else {
    slide.classList.add("animate_width");
    setTimeout(function () {
      $(".slide-left").css("opacity", "1");
      $(".slide-right").css("opacity", "0");
      $(".slide").css("right", "auto");
      $(".slide").css("left", "0%");
      $(".slide").css("border-radius", "30px 80px 80px 30px");
    }, 500);
    setTimeout(function () {
      slide.classList.remove("animate_width");
    }, 1000);
  }
});


let accounts=[],
    registerInputs=document.querySelectorAll("input");

let regex={
  name: /^(\s){0,}?[A-Za-z1-9]+( [A-Za-z1-9]+)*(\s){0,}?$/,
  email: /^[a-zA-Z_][\w\.]+@(gmail|yahoo)\.[a-z]{2,3}/,
  password:/^(\s){0,}?[A-Za-z1-9]+( [A-Za-z1-9]+)*(\s){0,}?$/
};

document.querySelector("form.registration").addEventListener("submit",function(e){
  e.preventDefault();
})

 