  
simpleCart.ready(function() {
    simpleCart.each(function(item, x) {
      $('form').append('<input type="hidden" name="' + 'Produkt ' + x + '" value="' + item.get('name').replaceAll('"', '_') + ", " + item.get('quantity') + "ks, cena za lahev:" + item.get('price') + ", dohromady:" + item.get('total') + '">');
      $('#purchased').append('<tr><td>'+ item.get('name') + '</td><td>' + item.get('price') + 'Kč</td><td>' + item.get('quantity') + 'ks</td><td>' + item.get('total') + 'Kč</td></tr>');
    });
    $('form').append('<input type="hidden" name="' + 'Dohromady" value="' + 'cena celkem: ' + simpleCart.total() + ', vcetne postovneho: ' + simpleCart.grandTotal() + '">');
  });