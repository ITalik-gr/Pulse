$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        // adaptiveHeight: true,
        prevArrow: '<button type = "button" class = "slick-prev"> <img   src="img/icons/left.png" alt="slick-prev"> </button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right.png" alt="slick-next"></button>',
        responsive: [
        {
          breakpoint: 992,
          settings: {
          dots: true,
          arrows: false,
        }
          }
          
            ],
            
      });
  });



