var products    = ['Coke', 'Diapers', 'Shampoo', 'Skittles', 'Soap','Bruh'];
var details     = [
    'Coke sucks.',
    'I used to wear diapers.',
    'Shampoo-poo.',
    'Taste the rainbow.',
    'So fresh and so clean, clean.',
    'Grapes are whatever.',
    'Bruh.',

];
var images      = ['coke.png', 'diapers.jpg', 'shampoo.jpg', 'skittles.jpg', 'soap.jpg','coke.png' ]
var prices      = [1.25, 1.00, .19, .75, .50, 2.00];
var inventories = [100, 15, 30, 90, 100, 300];
var cart        = [];
var total       = 0;
$(function(){
    //Add products to the store
    for(var i = 0; i < products.length; i++)
    {
        var string = "";
        string +='<div class="col-xs-2">';
        var image = images[i] || 'coke.png';
        string +='<img class="img-thumbnail" src="./images/'+ image +'"/>';
        string +='<div class="title">' + products[i] + '</div>';
        string +='<div class="details">' + details[i] + '</div>';
        string += '<div class="price">' + currencyFormat(prices[i]) + '</div>';
        string +='<div class="quantity">';
        string +=       buildSelect(i);
        string +='</div>';
        string +='<button class="btn" value=' + i + '>Add to Cart</button>';
        string +='</div>';
        string +='</div>';
        $('#products').append(string);
        //Set the cart counter to 0 for that this index
        cart.push(0);
    }
    //Add product event
    $('#products').on('click', '.btn', function(button){
        var i = $(this).val();
        var quantity = parseInt($('#' + products[i] + 'Select').val());
        var price = prices[i];
        //add quantity to cart
        cart[i] = cart[i] + quantity;
        //add quantity * price
        total = total + (quantity * price);
        console.log(total, cart);
    });
    //View cart event
    $('#viewCart').on('click', function(){
        //Clear the cart
        $('#cartContents').html('');
        //Build the cart
        for(var i = 0; i < products.length; i++)
        {
            var count = cart[i];
            if(count > 0) {
                var string = "";
                string += '<li class="list-group-item clearfix">';
                string += products[i];
                string += '<span class="badge badge-pill badge-primary">' + count + '</span>';
                string += '</li>';
                $('#cartContents').append(string);
            }
        }
    });
    //Checkout
    $('#checkout').on('click', function(){
        console.log("Checking out");
        $('#checkoutModal').modal();
    });
    $('.nav a').on('click', function(){
        var _opened = $(".navbar-collapse").hasClass("collapse in");
        if (_opened === true) {
            $('.navbar-toggle').click();
        }
    });
});
function buildSelect(i)
{
    var product = products[i];
    var inventory = inventories[i];
    var string = '';
    string +='  <select id="' + product + 'Select">';
    var max = inventory || 0;
    for(var j = 1; j <= max; j++)
    {
        string += '<option value=' + j + '>' + j + '</option>';
    }
    string +='</select>';

    return string;
}
function currencyFormat(number)
{
    currency = "$" + number.toFixed(2);
    return currency;
}