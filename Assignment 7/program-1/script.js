//1. program to check whether the light is on or off



while (true) {
  let userInput = prompt("Enter a number (0 for OFF, 1 for ON)");

  if (userInput === null || userInput.trim() === "") {
    alert("Invalid input. Try again!");
    continue;
  }

  

  if (isNaN(userInput)) {
    alert("Invalid input. Try again!");
    continue;
  }
let num = Number(userInput);
console.log(num);
  if (num === 0) {
    alert("The light is OFF");
  } else if (num === 1) {
    alert("The light is ON");
  } else {
    alert("Invalid input. Please enter only 0 or 1.");
    continue;
  }

  break;
}
