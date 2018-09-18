$(document).ready(function() {
  $('.page-nav__link').on('click', function(e) {
    $('.page-nav__link').removeClass('active');
    $(this).toggleClass('active');
  });

  // Сatalog Slider
  $('#catalogSlider').slick({
      mobileFirst: true,
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 767,
          settings: 'unslick'
        }
      ]
    });

  // Сatalog Slider
  $('#worksSlider').slick({
      initialSlide: 2,
      centerMode: true,
      centerPadding: '40px',
      mobileFirst: true,
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 767,
          settings: 'unslick'
        }
      ]
    });
});
