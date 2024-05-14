function updateTotal() {
    var total = 0;
    var products = document.getElementsByClassName("product");

    for (var i = 0; i < products.length; i++) {
        var priceElement = products[i].getElementsByClassName("price")[0];
        var price = parseFloat(priceElement.textContent.replace("$", ""));
        var quantityElement = products[i].getElementsByClassName("quantity")[0].getElementsByTagName("input")[0];
        var quantity = parseInt(quantityElement.value);
        total += price * quantity;
    }

    document.getElementById("total-price").textContent = "$" + total.toFixed(2);
}