// $(funtion() {
//   $('.trigger').click(function(){
//     $(this).toggleClass('active');
//   })
// })
/* Trigger*/
$(function() {
  $('.trigger').click(function(){
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
  });
  $('section, menu a').click(function(){
    $('.gnb').removeClass('active');
    $('.trigger').removeClass('active')
  });

  /* Change CSS scroll */
  $(window).scroll(function() {
    if($(window).scrollTop() > 50) {
      $('header, .gototop').addClass('active')
    } 
    else {
      $('header, .gototop').removeClass('active');
    }
  });

  /* Smooth Scrolling */
  $('.menu a, .gototop').click(function(e){
    $.scrollTo(this.hash || 0, 700);
  });

  /* History */
  $('.history-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2
  })
  /*Project*/
  $('.tab .project-photo').slick({
    slidesToShow: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 700,
    fade: true,
    // cssEase: 'liner'
    })
});