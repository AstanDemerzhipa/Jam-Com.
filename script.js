
let h2 = document.querySelector("h2")
let btn = document.querySelector(".btn")

let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.main-nav')
burger.addEventListener('click',function(){
    burger.classList.toggle('active')
    nav.classList.toggle('active')
})



$('.carusel').slick({
  centerMode: true,
  centerPadding: "60px",
  prevArrow: '<img src="images/Arrow_left.svg">',
  nextArrow: '<img src="images/Arrow_right.svg">',
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

