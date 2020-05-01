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
window.addEventListener( "load", function () {
    let btn = document.querySelector (".smart__btn");
    btn.addEventListener ("click", function () {
       let navigation = document.querySelector (".header__Navlist");
       navigation.classList.toggle("active");  
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  $('.owl-carousel').owlCarousel({
    margin:330,
    autoWidth:true,
    center:true,
    loop:true,
    nav:true
})