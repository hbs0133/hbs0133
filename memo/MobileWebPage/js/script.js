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

  /* Goods suggestion Slider */
  $('.goods-suggestion-items').slick({
    slidesToShow: 3,
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToScroll: 2
  });

/* Wish */
  $('.wish').click(function(){
    $(this).toggleClass('active');
  });

/* Front Footer */
  $('.btn-view-more').click(function(){
    $('.company-info-more').toggle()
  });

/* Product Detail Slider */
  $('.product-detail-slider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1
  });

/* Product accordion*/
  $('.products-accordion .detail').eq(0).show();
  $('.products-accordion .title').click(function(){
    $(this).next().toggle();
    $(this).addClass('active');
    $(this).siblings('.products-accordion .title').removeClass('active')
  });

/* Product order info */
  $('.btn-order-choice').click(function(){
    $('.product-order-choice').hide();
    $('.product-order-final').slideDown(250);
    $('.overlay-fold').show();
  });
  $('.btn-fold, .overlay-fold').click(function(){
    $('.product-order-choice').show();
    $('.product-order-final').slideUp(250);
    $('.overlay-fold').hide();
  });
});