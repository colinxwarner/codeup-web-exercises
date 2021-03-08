"use strict";

$(document).ready(function(){

    var i = 0;

    $(document).keydown(function(e){

        var userKey = e.keyCode;	//Monitors which keys are being pressed and assigns to variable 'key'
        console.log(userKey);

        var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];		//Key code for konami sequence

        if (userKey == konamiCode[i]){			//If 1st user key input matches konami code, go to the next one
            i++;

        } else {
            $(".tryAgain").fadeIn(1000);
            $("#emoji").fadeIn(1000);
            console.log("start over");			// If user key input does not match, start over
            reset();

        }

        if (i == konamiCode.length){
            alert("You have gained 30 lives!");
            console.log ("success!");
            reset();
        }

    });

    function reset(){
        i = 0;
        $(".tryAgain").fadeOut(1000);
        $("#emoji").fadeOut(1000);
    };

});