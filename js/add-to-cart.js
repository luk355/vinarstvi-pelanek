$(document).ready(function () {
  $('.item_add').click(function () {
    $('#cart-menu').addClass('shake');
    
    setTimeout(function() {
      $('#cart-menu').removeClass('shake');
    }, 3000);
    
    $('html, body').animate({
      scrollTop: 0
    }, 30);
  })
});