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

let size = 8;
let board = '';

for (let y= 0; y < size; y++) {
    for(let x= 0; x < size; x++) {
        if ((x+y) % 2 == 0) {
            board += " "

        } else {
            board += "#";
        }
    }

    // board += "\n"
}

console.log(board);

