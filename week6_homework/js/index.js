/*
 Goal: get this shopping cart working!
 - load the correct products into the <select>
 - when the "Add to Cart" button is clicked it should add the item to the shopping cart
 - the receipt should show the correct price for each item in the shopping cart
 - the receipt should have the correct total for all the items in the shopping cart
 Bonus:
 - Create your own products
 - Add a description of each item in the shopping cart
 - List the product next to the price in the receipt
 - Have the shopping cart list each product once with the number of that item in the cart
 For example:
 apple 3
 instead of:
 apple
 apple
 apple
 Hint: you'll need array like var arrCount = [0, 0, 0]
 */
$(function(){

    // data
    var arrProducts = ['Boxing Gloves','Mouthguard','Boxing Shoes'];
    var arrProductDescriptions = ['Red Title Gloves', 'Venum Mouthguard', 'Nike HyperKO']
    var arrPrices = [80, 25, 160];

    // global variables
    var index = 0;
    console.log(index)
    var product = arrProducts[index];
    var price = arrPrices[index];
    var total = 0;
    var formattedPrice = currencyFormat(price)
    var formattedTotal = currencyFormat(total)
    var arrCount = [] // keep track of products added in cart
    for (var i = 0; i < arrProducts.length; i++) {
        arrCount.push(0);
    }

    //Functions to call
    initProducts(arrProducts, arrPrices);
    // set index on change of selectProduct
    $("#selectProduct").change(function() {
        index = this.value;
    });

    // #products submit event Handler
    $("#products").submit(function(submitEvent) {
        // prevent the form from submitting (redirecting to a new page)
        submitEvent.preventDefault();

        // assign new values
        product = arrProducts[index];
        price = arrPrices[index];
        total += price;
        formattedPrice = currencyFormat(price);
        formattedTotal = currencyFormat(total);

        // update arrCount
        arrCount[index] += 1

        //Update the DOM
        if (arrCount[index] == 1) {
            $('#cart').append(
                '<div class="col-xs-12">' +
                product +
                ' <span class="p' + index + '">' + arrCount[index] + '</span>' +
                '<p class="productDescriptions">' + arrProductDescriptions[index] + '</p>' +
                '</div>'
            );
            $("#itemRow").append(
                '<div class="col-xs-12">' +
                '<span>' + product + '</span>' +
                ' <span class="p' + index + '">' + arrCount[index] + '</span>' +
                '<span class="pull-right">' + currencyFormat(arrCount[index]*price) + '</span>' +
                "</div>"
            );
        } else {
            $('.p'+index).html(arrCount[index])
        }
        $("#total").html(formattedTotal);
    });
});

function currencyFormat(number) {
    currency = "$" + number.toFixed(2);
    return currency;
}

function initProducts(arrProducts, arrPrices) {
    $.each(arrProducts,function(index, value){
        $('#selectProduct').append('<option value=' + index + '>' + value + ' - ' + currencyFormat(arrPrices[index]) + '</option>');
    });

}
