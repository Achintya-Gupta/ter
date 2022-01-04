var name1="cheenti";
console.log(name1);
console.log("hdhdhddhfhdh");
console.log("how are you?");
console.log("fine");


var name2="gupta";
console.log(name2);

name3 = name1.concat(name2);
console.log(name3);

var a = 6;
var b=10;
var add= a+b;
console.log(add);

var a = 6;
var b=10;
var subtract= b-a;
console.log(subtract);

var a = 6;
var b=10;
var multiply= a*b;
console.log(multiply);

var a = 6;
var b=10;
var divide= b/a;
console.log(divide);

var numbers = [34,45,445,45,46];
console.log(numbers);

numbers.push(90,54,908,89);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

console.log(numbers.length);












var images=[
    "https://www.how-to-draw-funny-cartoons.com/images/cartoon-dad-005.jpg",

    "https://www.kindpng.com/picc/m/120-1203344_cartoon-mother-clipart-hd-png-download.png",

    "https://www.pikpng.com/pngl/m/394-3949282_boy-cartoon-png-happy-cartoon-boy-png-clipart.png",

    "https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-little-girl-avatar-character-vector-illustration-design.jpg?ver=6",

]
var i=0;

function next(){
    if (i == 4)
    {
        i=0;
    }
   document.getElementById("images").src=images.[i]; 
}