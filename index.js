// 1. ways to print in javascript

console.log("Hello World");
alert("me");
document.write("This is a document");

// 2. Javascript console API

console.log("Hello World" , 4+6, "from Waqar");
console.warn("this is warning");
console.error("this is an error");

// 3. variables in Javascript

var number1 = 3.8;
var number2 = 2.2;
console.log(number1 + number2); 

//4. data types in Javascript
//strings

var str1 = "This is Waqar";
var str2 = "This is also Waqar";
console.log(str1)   //Javascript is forgiving lanaguage here you not add (;) still code will be executed

//numbers
var num1 = 455;
var num2 = 34.21;

//objects
var marks = {
    Waqar: 97,
    Kashif: 98.32,
    kausar: 80

}
console.log(marks)

//Booleans
var a = true;
var b = false;
console.log(a,b);

var und;    //here we just declare a variable there is nothing stored in und so it in undefined
console.log(und);

var n = null;
console.log(n);         //null stored in var n

/*
At a very high level langauges there are two types of data types in Javascript
1. Primitive data type . null, undefined , strings , numbers, booleans , symbol
2. Reference data typen   arrays and objects  */


//arrays

var arr = [1,'string',3,true,5];
console.log(arr);

//operators

//Arithmatic operators
var s = 100
var t = 10
console.log("The value of s + t is " ,s+t );
console.log("The value of s - t is " ,s-t );
console.log("The value of s * t is " ,s*t );
console.log("The value of s / t is " ,s/t );

//Assignment operators
var c = s
c += 5;
console.log(c);

//Comparison operators
var x = 34
var y = 30
console.log(x>= y);
console.log(x<= y);
console.log(x == y);

// Logical operators   (AND)
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)


// Logical operators   (OR)
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)


// Logical not !

console.log(!false)
console.log(!true)

//Function in Javascript

function avg(a , b)
{
    return (a+b)/2;
}

//DRY = do not repeat yourself
c1 = avg(4,6);
c2 = avg(14,16);
console.log(c1, c2);


// Conditional statements

//Single statement
var age = 10;
if(age > 18)
{
    console.log("You are Eligible");
}

//if-else statements
if(age > 18)
{
    console.log("You are Eligible");
}
else{
    console.log("You are not Eligible");
}

//if-else ladder

var marks  = 90;
if(marks >= 86)
{
    console.log("A+");
}
else if(marks > 78)
{
    console.log("A-");
}
else if(marks > 70)
{
    console.log("B+");
}
else if(marks > 50)
{
    console.log("pass");

}

else{
    console.log("F");
}


const v = 5;
v++;       //error
console.log(v);



//LOOPS
var array = [1,2,3,4,5];
for(let i =0; i<array.length; i++)
{
    console.log(array[i]);
}

let j = 0;
while(j<array.length)
{
    console.log(array[j]);
    j++;
}

do{
    console.log(array[j]);
    j++;
}while(j<array.length)


//break and continue statements

let arr1 = [1,2,3,4,5];
for(let i =0; i<array.length; i++)
{   
    if(i == 2)
        break;
    console.log(array[i]);
}

for(let i =0; i<array.length; i++)
{   
    if(i == 2)
        continue;
    console.log(array[i]);
}


//Array methods/functions

let myArr = ["Fan" , true , null, 444];
console.log(myArr.length);
(myArr.pop());    //pop will delete last item from array
console.log(myArr);
myArr.push("waqar");  //it will add item into array
console.log(myArr);
myArr.shift();     //draw the first element  
console.log(myArr);
const  newLen = myArr.unshift("Ahmed");   //unshift will add item at start of Array
console.log(newLen);
console.log(myArr);

//string methods in JAVASCRIPT 

let mystring = "Waqar is good boy, Yes good boy";
console.log(mystring.length);
console.log(mystring.indexOf("Waqar"));    //Indexof will return index of string from start

console.log(mystring.lastIndexOf("Yes")); // lastIndexof will return  index of string from last 

console.log(mystring.slice(0,3));  

console.log(mystring.replace("Waqar" , "Ahmed"));

//Date and time in JAVASCRIPT
myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());   //getTime will return time in seconds
console.log(myDate.getDay());  //getDay will return number from monday to that day
console.log(myDate.getFullYear()); //getFullYear will return years
console.log(myDate.getMinutes());   //getMinutes will return minutes currently

//DOM document object model (in any page links , images, names) are DOM
//we have some Dom methods with the help of these methods we can manipulate  the HTML as Dyanamacilly by JAVASCRIPT

// //DOM manipulation
let elem = document.getElementById('click'); 
console.log(elem);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass); 

elemClass[1].style.background = 'red';
elemClass[1].classList.add('bg-primary');      //adding class to another class
elemClass[1].classList.add('text-success'); 

console.log(elemClass[0].innerHTML)  
console.log(elemClass[0].innerText)


tn = document.getElementsByTagName('div');
console.log(tn);

//making an element in JAVASCRIPPT
createdelement = document.createElement('p')
createdelement.innerText = 'this is created para'
tn[0].appendChild(createdelement)



createdelement2 = document.createElement('b')
createdelement2.innerText = 'this is created bold'
tn[0].replaceChild(createdelement2 , createdelement)

//selecting using Query
sel = document.querySelector('.container');
console.log(sel);

sele = document.querySelectorAll('.container');
console.log(sele);

//Event in JAVASCRIPT

function clicked()
{
    console.log("The button was clicked");
}
window.onload = function()
{
    console.log("The document was loaded");
}

//once our document loaded we can perform some operations
//here we work on first container

firstcontainer = addEventListener("click" , function(){      //it will be print on first container
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
    console.log("click hua")



}) 


firstcontainer = addEventListener("mouseover" , function(){
    console.log("Mouse on container");

})


firstcontainer = addEventListener("mouseout" , function(){
    console.log("Mouse out of  container");
    
})
let prevHTML  =   document.querySelectorAll('.container')[1].innerHTML;
firstcontainer = addEventListener("mouseup" , function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up on container");
    
})

firstcontainer = addEventListener("mousedown" , function(){      //when you will click 
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
    console.log("Mouse down on container");
    
    
})



//Arrow function 

function summ(a,b){
    return a+b;
}

summ = (a,b)=>{   //we can write function by arrow which is same as normal fun but it will help when we have need a function between code.
    return a+b;
}

logkaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>  set interval fired</b>"
    console.log("I am your log")
}

// setTimeout and setInterval

setTimeout(logkaro , 2000);

clr = setInterval(logkaro , 2000);

//use clearInterval(clr)/clearTimeout(clr) to cancel setInterval and setTimeout

//javascript localstorage

localStorage.setItem("name" , "waqar")
localStorage
localStorage.getItem("name")
localStorage.clear()
localStorage.removeItem("name")



//JSON

obj = {"name": 'waqar', length: 1 , age: 25}
jso = JSON.stringify(obj)
console.log(jso)
console.log(typeof jso)

console.log(typeof obj)


//ECMAscript is standard to maintian javascript it has different type of versions














