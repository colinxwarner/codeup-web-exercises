"use strict";

// selectors
// $(document).ready(function() {
// var idContent = $("#light-coffee").html();
// alert(idContent);
// var idContent = $("#medium-coffee").html();
// alert(idContent);
// });

// $(document).ready(function() {
// $(".codeup").css({"border": "5px solid pink", "backgroundColor": "lightyellow", "color": "orange"});
// });

// $(document).ready(function() {
//     $(".coffeeType").css("fontSize","20px");
//     $("h1,p,li").css({"border": "5px solid pink", "backgroundColor": "lightyellow", "color": "orange"})
//     alert($("#h1").html());
// });


// MouseEvent
$(".codeup").click(function (){
    $(".codeup").css("background-color","yellow")
});

$('li').dblclick(function (){
    $('li').css("font-size",'18px');
})


$('li').hover(
    function() {
        $(this).css('background-color', 'yellow');
    },
    function() {
        $(this).css('background-color', 'pink');
    }
);