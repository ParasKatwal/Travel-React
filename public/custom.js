$(function(){
    $(window).scroll(function() {
        if($(window).scrollTop() >= 100) {
          $('.header__navbar').addClass('scrolled');
        }
      else {
        $('.header__navbar').removeClass('scrolled');
      }
    });
});