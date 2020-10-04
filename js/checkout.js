  
simpleCart.ready(function() {
    simpleCart.each(function(item, x) {
      $('form').append('<input type="hidden" name="' + 'Produkt ' + x + '" value="' + item.get('name') + ", " + item.get('quantity') + "ks, cena za lahev:" + item.get('price') + ", dohromady:" + item.get('total') + '">');
    });
    $('form').append('<input type="hidden" name="' + 'Dohromady" value="' + 'cena celkem: ' + simpleCart.total() + ', vcetne postovneho: ' + simpleCart.grandTotal() + '">');
  });