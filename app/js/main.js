$(function(){
  

  $('.print__items').slick({
    slidesToShow: 3,
  });
  $('.reviews__inner').slick({
    
  });
  $('.stock__items').slick({
   
  });
  $('.reviews__star').rateYo({
    starWidth: "12px",
    ratedFill: "#5CD36C",
    readOnly: true,
  });
  $('.shop-one__star').rateYo({
    starWidth: "20px",
    normalFill: "#F0F0F0",
    ratedFill: "#FFC700",
    readOnly: true,
    
  });
  $('.reviews-one__info-star').rateYo({
    starWidth: "20px",
    normalFill: "#F0F0F0",
    ratedFill: "#FFC700",
    readOnly: true,

  });
  

  $('.shop-page__select,.shop-one__select,.shop-one__input').styler();

  var mixer = mixitup('.top-sale__items')


});