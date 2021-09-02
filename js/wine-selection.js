$(document).ready(function () {
  $("#bottled-wine-button").click(function () {
    $("#bottled-wine-button").addClass("special");
    $("#barell-wine-button").removeClass("special");

    $("#bottled-wine").removeClass("hidden");
    $("#barell-wine").addClass("hidden");
  });

  $("#barell-wine-button").click(function () {
    $("#bottled-wine-button").removeClass("special");
    $("#barell-wine-button").addClass("special");

    $("#barell-wine").removeClass("hidden");
    $("#bottled-wine").addClass("hidden");
  });

  $("#barell-wine-button").click(function () {
    $("#bottled-wine-button").removeClass("special");
    $("#barell-wine-button").addClass("special");

    $("#barell-wine").removeClass("hidden");
    $("#bottled-wine").addClass("hidden");
  });

  $(".item_selection").change(function () {
    updateBibValues($(this));
  });

  $(".item_selection").each(function (index) {
    updateBibValues($(this));
  });

  function updateBibValues(select) {
    let selectedOption = select.children("option:selected");

    let price = selectedOption.attr("data-price");
    const hiddenPriceInput = select.closest(".content").children(".item_price");
    hiddenPriceInput.text(price);

    let wine = selectedOption.attr("data-wine");
    let year = selectedOption.attr("data-year");
    let volume = selectedOption.attr("data-volume");
    const hiddenNameInput = select.closest(".content").children(".item_name");
    hiddenNameInput.text(`${wine} ${year} BIB - ${volume}`);
  }
});
