
var geoff1 = document.getElementById("geoff1")
var geoff2 = document.getElementById("geoff2")

// generating random numbers to decide what the main page will display
if(Math.floor((Math.random() * 1000) + 1) == 7) {
    geoff1.style.display = ''
}
else {
    geoff2.style.display = ''
}

