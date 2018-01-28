//Set reference variables for html elements
var colorBox = document.getElementById("colorBox");
var buttonShow = document.getElementById("btnShow");
var buttonClear = document.getElementById("btnClear");

//Set mouse click events for buttons Show and Clear
buttonShow.addEventListener("click", clickHandler, false);
buttonClear.addEventListener("click", clickHandler2, false);

//Display the resulting color from the inputs
function clickHandler() {
    var colorName; //color for passing warning string
    var colorRed = parseInt(document.getElementById("redInput").value);       //red input value
    var colorGreen = parseInt(document.getElementById("greenInput").value);   //green input value
    var colorBlue = parseInt(document.getElementById("blueInput").value);     //blue input value
    
    if (colorRed < 0 || colorRed > 255) {
        colorName = "Red";
        colorInputWarn(colorName);        
    }
    
    else if (colorGreen < 0 || colorGreen > 255) {
        colorName = "Green";
        colorInputWarn(colorName);
    }
    
    else if (colorBlue < 0 || colorBlue > 255) {
        colorName = "Blue";
        colorInputWarn(colorName);
    }
    
    else {
        colorBox.style.backgroundColor = "rgb(" + (colorRed) + ", " + (colorBlue) + ", " + (colorGreen) + ")";
    }
}

//Clear the color input and resulting color display 
function clickHandler2() {
    //Set result color display to white
    document.getElementById("redInput").value = 255;
    document.getElementById("greenInput").value = 255;
    document.getElementById("blueInput").value = 255;
    clickHandler(); //Call to display the resulting color
    
    //Clear all inputs
    document.getElementById("redInput").value = null;
    document.getElementById("greenInput").value = null;
    document.getElementById("blueInput").value = null;
    
}

//Warning message for color not in acceptable range of 0-255
function colorInputWarn(localColor) {
    alert ("The color " + localColor + " input is not a valid value!");
}
