$(function () {

   $(".service .tabs__wrapper .tab").click(function () {
      $(".service .tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
      $(".services .tab_item").hide().eq($(this).index()).fadeIn()
   }).eq(0).addClass("active");

   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      // $('body').toggleClass('lock');
   });

   $('.slider').slick({
      prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow_prev.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow_next.svg" alt=""></button>',
      autoplay: true,
      fade: true,
      dots: true,
      responsive: [
         {
            breakpoint: 830,
            settings: {
               arrows: false
            }
         },
         {
            breakpoint: 500,
            settings: {
               dots: false
            }
         }
      ]
   });

   $("#menu, #top").on("click", "a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();
      //забираем идентификатор бока с атрибута href

      var id = $(this).attr('href'),
         //узнаем высоту от начала страницы до блока на который ссылается якорь
         top = $(id).offset().top;

      //анимируем переход на расстояние - top за 1500 мс

      $('body,html').animate({ scrollTop: top }, 1500);
   });

});