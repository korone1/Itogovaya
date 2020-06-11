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
    let navigation = document.querySelector(".header__Navlist");
    navigation.classList.toggle("active");
  });
});

$(document).ready(function() {
  $(".owl-carousel").owlCarousel();
});
$(".owl-carousel").owlCarousel({
  margin: 300,
  autoWidth: true,
  center: true,
  loop: true,
  nav: true,
  dots: true,
});

/// Кнопка наверх и страница Абаут анимация айтемов
jQuery(document).ready(function($) {
  let btn = $("#buttonTop");
  let animated = $(".avesomePics");

  $(window).scroll(function() {
    if ($(window).scrollTop() > 1000) {
      btn.addClass("show");
      animated.addClass("pulse");
    } else {
      btn.removeClass("show");
      animated.removeClass("pulse");
    }
  });
//// aNimate

  btn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
//// Themes
  $(".InputBtn").on("click", function() {
    $(".navInput").toggleClass("activeInput");
  });
  $("#thema").on("click", function() {
    $("body, .aboutAvesome, .aboutSection, .Items").toggleClass("themaBack");
  });

  /// Input 
  /// Форма по событию отправки примиени отмену отправки
$("form").on("submit", function (e) {
  e.preventDefault();
  let reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  let inputFooter = $('input[name="inputFooter"]').val().trim();
  let inputEmail = $('input[name="inputEmail"]').val().trim();
  if (inputFooter && reg.test(inputEmail) ) {
    alert ("Форма Отправлена");
  }
  else {
    e.preventDefault();
  }
});
//// Появление и исчезновение формы
$('.btnInp').on('click', function () {
  $('.formBlog').fadeToggle('formAct');
})
//// акардеон
$('.textBlog').on('click', function () {
  $('.blogH').siblings().slideToggle();
})
$('.perBtn').on("click", () => {
  $('.perieraIcons').slideToggle();
})
});
