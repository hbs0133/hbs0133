$(function() {
  $('.gnb-include').load('/include/gnb.html');
  $('.main-header-include').load('/include/main-header.html');

  /*Category Accordien*/
  $('.category-accordion .detail').eq(0).show()
  $('.category-accordion .title').click(function () {
    $(this).next().stop().slideDown();
    $(this).siblings('.category-accordion .title').next().stop().slideUp();

    $(this).addClass('active');
    $(this).siblings('category-accordion .title').removeClass('active');
  });

  /* Recent Search Result */
  $('.search-recent .btn-clear').click(function() {
    $(this).parent().hide();
  });
  $('.search-recent .btn-allclear').click(function() {
    $('.search-recent .item').hide();
  });

  /* Cart Items */
  $('.cart-items-header .btn-allclear').click(function() {
    $('.cart-item').hide();
  });
  $('.cart-item-title .btn-clear').click(function() {
    $(this).parent().parent().hide();
  });

  /* Front Siler */
  $('.front-slider').slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1
  });

});