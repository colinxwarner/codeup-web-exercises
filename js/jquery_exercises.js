"use strict";

// MouseEvent
$(".codeup").click(function (){
    $(".codeup").css("background-color","dodgerblue")
});

$('li').dblclick(function (){
    $('li').css("font-size",'18px');
})


$('li').hover(
    function() {
        $(this).css('background-color', 'lightgrey');
    },
    function() {
        $(this).css('background-color', 'lightgrey');
    }
);