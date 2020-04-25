/* window.addEventListener ("load", function () {
    let menuBtn = document.querySelector(".smart__btn");
    menuBtn.addEventListener("click", function() {
    let navigation = document.querySelector ("navList");
    navigation.classList.add("active");   
    });
}); */

/* window.addEventListener( "load", function () {
    let btn = document.querySelector (".smart__btn");
    console.log (btn)
    btn.addEventListener ("click", function () {
       alert("Ну хоть что-то")
    } )
}); */
window.addEventListener("load", function() {
  let btn = document.querySelector(".smart__btn");
  btn.addEventListener("click", function() {
    let navigation = document.querySelector(".header__navs");
    navigation.classList.toggle("active");
  });
});

$(document).ready(function() {
  $(".header__slider").owlCarousel({
    items: 3,
    loop: false,
    center: true,
    margin: 1,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: "URLHash",
  });
});

let jsnav = $(".jsNav");
let bceItem = $(".our__item");
let mobileApps = $(".mobileApps");
let identitles = $(".identitles");
let interiorDesing = $(".interiorDesing");
let ui = $(".ui");
jsnav.on("click", function() {
  jsnav.siblings().removeClass("active");
  $(this).addClass("active");

  if ($("#all").hasClass("active")) {
    bceItem.addClass("show");
  } else {
    bceItem.removeClass("show");
  }
  if ($("#mobileApps").hasClass("active")) {
    mobileApps.addClass("show");
  }
  if ($("#identitles").hasClass("active")) {
    identitles.addClass("show");
  }
  if ($("#interiorDesing").hasClass("active")) {
    interiorDesing.addClass("show");
  }
  if ($("#ui").hasClass("active")) {
    ui.addClass("show");
  }

});

let array = 4 
let hello = 6
console.log(array + hello);
 