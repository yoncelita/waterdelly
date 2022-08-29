
$(function() {
    var owl = $(".gallery-carousel");
    owl.owlCarousel({
      items: 6,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      loop: true,
      nav: false,
      dots: false,
      responsive:{
        0:{
            items:1,
            dots: true
        },
        600:{
            items:3
        },
        1000:{
            items:7
        }
    }
    });
  });
  


  // related products
  $(function() {
    // Owl Carousel
    var owl = $(".related-prod-carousel");
    owl.owlCarousel({
      items: 4,
      margin: 10,
    //   autoplay: true,
    //   autoplayTimeout: 3000,
      loop: true,
      nav: false,
      dots: false,
      responsive:{
        0:{
            items:1,
            dots: true
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
    });
  });
