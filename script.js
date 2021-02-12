/*
    TODO:   
        - add sass preprocessing to styling
        - randomly generate hex color
        - add button that changes the color of the website
        - button that changes the theme of the website
        - make random color button respect the theme button and choose
          colors with darker hues


*/
var geoff1 = document.getElementById("geoff1")
var geoff2 = document.getElementById("geoff2")
var geoff3 = document.getElementById("geoff3")
var geoff4 = document.getElementById("geoff4")

// generating random numbers to decide what the main page will display

// switch statment

switch(Math.floor((Math.random() * 4) + 1)) {
    case 1: 
    geoff1.style.display = ''
        break;
    case 2: 
    geoff2.style.display = ''
        break; 
    case 3: 
    geoff3.style.display = ''
        break;
    case 4: 
    geoff4.style.display = ''
        break;        
}

let white = 0xFFFFFF
// complementary = 0xFFFFFF - (yourColor) where yourColor is a 
// varible containing a hex color value
complementary(randColor) = () => white - randColor
