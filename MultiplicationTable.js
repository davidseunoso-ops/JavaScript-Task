const prompt = require("prompt-sync")();

while (true) {
let number = Number(prompt("Enter a number: "));
    if (isNaN(number)) {
        console.log("Enter a valid number. Try again!");
        }
        else {
            for(index = 1; index <= 12; index++) {
                let multiplicationTable = number * index
                    console.log(number + " x " + index + " = " + multiplicationTable);
                }
                    break;
                    }
              }
        
        
        

