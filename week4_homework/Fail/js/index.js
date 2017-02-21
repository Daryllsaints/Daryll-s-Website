$('#hideCircle')

var t = 0;

$('#showCircle').click(function(){
    $('#circle').show();

})

$('#stopCircle').click(function(){
    $('#circle').stop();
})

$('#goCircle').click(function(){
    $('#circle').animate();
})

function moveit() {
    t += 0.05;
    var r = 100;
    var xcenter = 100;
    var ycenter = 100;
    var newLeft = Math.floor(xcenter + (r * Math.cos(t)));
    var newTop = Math.floor(ycenter + (r * Math.sin(t)));
    $('#circle').animate({
        top: newTop,
        left: newLeft,
    }, 1, function() {
        moveit();
    });
}

$(document).ready(function() {
    moveit();
});

/*
$('#circle').animate({
    marginLeft: "10%"
}, 500);
*/
