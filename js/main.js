function dataField(f) {
  alert("Спасибо что выбрали нас! " + f.name.value + " Мы с Вами свяжемся");
}

$('.slider').slick({

  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,

});




$('.slider_2').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [{
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});
$('.slider_3').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,

  responsive: [{
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

function checkParams() {
  var name = $('#name').val();
  var email = $('#email').val();
  var phone = $('#phone').val();

  if (name.length != 0 && email.length != 0 && phone.length != 0) {
    $('#submit').removeAttr('disabled');
  } else {
    $('#submit').attr('disabled', 'disabled');
  }
}