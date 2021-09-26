let greeting = "Hello! What is your name?";
let fname = prompt(greeting);

// if (fname === "" || fname === null) {
//   fname = prompt("Hello! What is your name?");

//   alert(
//     fname +
//       ', cuess the number from 1 to 100. Try to guess it in the least number of attemps. After each attemps I will say "less", "more" or "I guessed right".'
//   );
// }
while (fname == "" || fname == null) {
  fname = prompt(greeting);

  alert(
    fname +
      ', cuess the number from 1 to 100. Try to guess it in the least number of attemps. After each attemps I will say "less", "more" or "I guessed right".'
  );
}
//4
// let number = Math.ceil(Math.random() * 100);
let number = random(100);
let guess = prompt("What is the number?");
let numberOfGuesses = 0;

while (guess != number) {
  if (guess > number) {
    guess = prompt("Its more. Try again");
    numberOfGuesses = numberOfGuesses + 1;
  }
  // if (guess < number)
  else {
    guess = prompt("Less. Try again");
    numberOfGuesses = numberOfGuesses + 1;
  }
}
alert(
  "I guessed right " +
    number +
    ". You need " +
    numberOfGuesses +
    " attempts for it."
);
