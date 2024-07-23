$(function() { 
 $(window).scroll(function() {
  if($(this).scrollTop() != 0) {
   $('#up').fadeIn(); 
  }
 else {
  $('#up').fadeOut();
  }
 });
$('#up').click(function() {
$('body,html').animate({scrollTop:0},800);
});

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
});

//Сдайдер//
/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);
/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}
/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);  
}
/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}
/* Функция перелистывания */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");   
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 
}

/*Пробный вариант слайдера на полном экране*/
/*imgInTable1*/
$(document).ready(function(){
  $('.imgInTable1').click(function(){
    //moving the div left a bit is completely optional
    //but should have the effect of growing the image from the middle.
    $(this).stop().animate({
      "width": "48vw","height":"34vw","left":"-40%","top":"10px","display":"flex",}, 400,'swing');
  }).mouseout(function(){ 
    $(this).stop().animate({"width": "18vw","height":"13vw","left":"0px","top":"0px"}, 200,'swing');
  });;
});
