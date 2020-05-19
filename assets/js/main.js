$(document).ready(function(){


  // main slider
  $(".slider").owlCarousel({
    loop:true,
    dots:false,
    nav:true,
    center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  });
})
