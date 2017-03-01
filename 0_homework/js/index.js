$('#dadMore').hide();
$('#ctoMore').hide();
$('#teacherMore').hide();

$(function(){
    
    // Using .toggle()
    $('#heading1').click(function(){
        $('#dadMore').toggle();
    });

    // Using show/hide
    isHidden = true;
    $('#heading2').click(function(){
        if(isHidden)
        {
            $('#ctoMore').show();
            isHidden = false;
        } else {
            $('#ctoMore').hide();
            isHidden = true;
        }
    });

    // Using .is(':visible')
    $('#heading3').click(function(){
        if($('#teacherMore').is(':visible'))
        {
            $('#teacherMore').slideUp();
        } else {
            $('#teacherMore').slideDown();
        }
    });

});
