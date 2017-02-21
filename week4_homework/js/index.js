$(function(){
    console.log("page loaded");
    
    $('#heading1').click(function(){
        console.log("heading1 clicked");
    });
});
console.log("file loaded");

$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown("slow");
    });
});