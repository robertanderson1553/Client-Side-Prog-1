var planetNames = ["Jupiter", "Venus", "Saturn", "Mars", "Zimbar"];
var distancesFromEarth = [5.2, 0.72, 9.5, 1.5, 3.6];
var sunnyInAugust = [false, false, false, false, false];
var output = document.getElementById("main");
    
for(var i = 0; i < planetNames.length; i++)
{
    // The distance from the earth in astronomical units, centered on each planet's orbit around the sun
    // Less than four astronomical units should be somewhat sunny, ignoring factors like storms, weather, etc.
    if (distancesFromEarth[i] < 4.0) 
    {
        sunnyInAugust[i] = true;
    }
    else
    {
        sunnyInAugust[i] = false;
    }
    
    output.innerHTML += "<font color='##000fff'><strong>" + planetNames[i] + "</strong></font><br>";
    output.innerHTML += distancesFromEarth[i] + "<br>";
    output.innerHTML += sunnyInAugust[i] + "<br>";
    output.innerHTML += "----------" + "<br>";
}