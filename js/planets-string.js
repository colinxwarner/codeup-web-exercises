//(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log(planetsString);
    //var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?

     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetString = planetsArray.join("<br>");
    console.log(planetsArray);

// src - https://stackoverflow.com/questions/31901088/how-can-i-convert-a-string-in-to-a-valid-html-list-using-regexp
// Regular Expression (RegEx) Walkthrough
// \b\d+              # match 1 or more digits after a word boundary
// \.                 # match one literal dot
// \s+                # match 1 or more space
// (.+?)              # match 1 or more any character and capture it group #1
// \s*                # match 0 or more spaces
// (?=...)            # a positive lookahead
// (?=\b\d+\. |\s*$)  # match must be followed by a word boundary + digits + dot OR
//                    # white spaces + line end

    var regx = "<ul>\n" +
    planetString.replace(/\b\d+\.\s+(.+?)\s*(?=\b\d+\. |\s*$)/g, "<li> $1 </li>\n") +
    "</ul>\n";

    console.log(regx);

//})();