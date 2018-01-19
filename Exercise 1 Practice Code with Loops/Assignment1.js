/*
    Assignment #1:

Part 1 - Write a program that uses console.log to write all the numbers from 1 to 300, with two exceptions. For numbers divisible by 5, write "Fizz" instead of the number, and for numbers divisible by 7 (and not 5), write "Fuzz" instead.

Part 2 - When you have that working, modify your program to write"FizzFuzz", for numbers that are divisible by both 3 and 5.

Part 3 - Write a loop that makes seven calls to console.log to output the following triangle:

#######
######
#####
####
###
##
#

*/

var poundSign = "#######";
var outputChar;

//Iterate 300 times and output to console.log.
for (var i = 1; i <= 300; i++){
    if ((i % 3 == 0) && (i % 5 == 0))            //numbers that are divisible by both 3 and 5
        console.log("FizzFuzz");
    else if (i % 5 == 0)                         //numbers that are divisible by both 5
        console.log("Fizz");
    else if ((i % 7 == 0) && (i % 5 != 0))       //numbers that are divisible by 7, but not by 5
        console.log("Fuzz");
    else                                         //all other numbers
        console.log(i);
}

//Iterate 7 times and output to console.log.
for (var j = 7; j > 0; j--){
    outputChar = poundSign.substring(0,j);       //set output to correct number of characters
    console.log(outputChar);                     //output the character/s
}








