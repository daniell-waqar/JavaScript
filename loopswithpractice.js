// for loop

for (let i = 0 ; i<5; i++){
  console.log("Waqar")
}


// while loop

let i = 1;
while(i <= 5){
  
  console.log("i = " , i)
  i++;

}

// do while loop

let i = 2
do {
   
  console.log("My name is Waqar")
  i++;
} while (i <= 5 );



// for of loop

let myName = "Waqar"

for(let i of myName) {
  
  console.log(i);
}


//for in loop

let student = {
  
  name: "Waqar",
  age: 21,
  cgpa : 2.8}
  
for (let key in student){
  
  console.log("key =" ,key, ",value = ",student[key])
}


// practice questions

// 1: print all even numbers from 0-100

for (let i=0; i<=100; i++){
  
  if(i % 2 === 0){
    
    console.log(i , "is even number");
  }
}


// 2: create a game where you start with any random game nnumber, ask the user to 
// keep guessing the game number until the user enters correct value.


let randNum = 5;

let userInput = prompt("Enter the value to guess the game number");

while (randNum !== Number(userInput)) {
    userInput = prompt("You guessed the wrong number! Try again...");
}

console.log("Congratulations! You got the correct value.");









