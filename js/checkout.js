
simpleCart.ready(function () {

  function renderIfUndefined(t) {
    if (t === undefined) {
      return '';
    }

    return t;
  }

  simpleCart.each(function (item, x) {
    $('form').append('<input type="hidden" name="' + 'Produkt ' + x + '" value="' + item.get('name').replaceAll('"', '_') + ", " + renderIfUndefined(item.get('selection')) + ", " + item.get('quantity') + "ks, cena za lahev:" + item.get('price') + ", dohromady:" + item.get('total') + '">');
    $('#purchased').append('<tr><td>' + item.get('name') + '</td><td>' + renderIfUndefined(item.get('selection')) + '</td><td>' + item.get('price') + 'Kč</td><td>' + item.get('quantity') + 'ks</td><td>' + item.get('total') + 'Kč</td></tr>');
  });
  $('form').append('<input type="hidden" name="' + 'Dohromady" value="' + 'cena celkem: ' + simpleCart.total() + ', vcetne postovneho: ' + simpleCart.grandTotal() + '">');
});

window.addEventListener("DOMContentLoaded", function () {

  // get the form elements defined in your form HTML above
  var form = document.getElementById("order-form");
  var button = document.getElementById("submit-button");
  var status = document.getElementById("form-status");
  var formSection = document.getElementById("order-form-section");
  var submitSuccessSection = document.getElementById("submit-success-section");

  // Success and Error functions for after the form is submitted
  function success() {
    form.reset();
    formSection.style = "display: none ";
    submitSuccessSection.style = "";
    
    ga('send', {
      'hitType': 'pageview',
      'page': '/purchase-success'
    });
    ga('send', 'event', 'wines', 'purchased', 'eshop', simpleCart.total());

    simpleCart.empty();
  }

  function error() {
    status.innerHTML = "Bohužel se nám nepodařilo Vaši objednávku odeslat. Kontaktujte nás prosím telefonicky. Telefonní číslo najdete na <a href=\"index.html#kontakt\">hlavní stránce</a>.";
  }

  // handle the form submission event
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}