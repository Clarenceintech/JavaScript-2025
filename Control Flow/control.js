// for (let line = "#"; line.length <= 7; line += "#" ) {
//     console.log(line);
// }

// for (let counter = 0; counter <= 100; counter += 1) {
//   if (counter % 3 == 0 && counter % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (counter % 3 == 0) {
//     console.log("Fizz");
//   } else if (counter % 5 == 0) {
//     console.log("Buzz");
    
//   }
//   else {
//     console.log(counter);
    
//   }

// }

// let size = 8;
// let board = '';

// for (let y= 0; y < size; y++) {
//     for(let x= 0; x < size; x++) {
//         if ((x+y) % 2 == 0) {
//             board += " "

//         } else {
//             board += "#";
//         }
//     }

//     // board += "\n"
// }

// console.log(board);


// Print your name & numbers from 0 through 1000

// let name = "Clarence";
// for ( counter = 0; counter < 1000; counter++ ) {
//     console.log(counter + name);
    
// }

// Print "Your Name" 100 times to the console using while loop
// Iteration will start from 10

// let myName = "Clarence";
// let counter = 10;

// while(counter <= 100) {
//     console.log(myName);
//     counter++;
    
// }


// Print "Your Name" 400 times to the console using do-while-loop.
// Iteration should start from 20.

let counter = 20;

do {
    console.log("Clarence", counter);
    counter ++;
    
} while (counter <= 400);
