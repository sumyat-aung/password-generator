// Get DOM Element

const result = document.getElementById("result");
const copy = document.getElementById("copy");
const length = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generate = document.getElementById("generate");

//////////////////////////////////////////////////////////////

// 4 function for getting random word

let randomUppercase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
};

let randomLowercase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
};

let randomNumbers = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
};

let randomSymbols = () => {
  let allSymbols = "!@#$%^&*(){}[]=<>/,.";
  return allSymbols[Math.floor(Math.random() * allSymbols.length)];
};

let allFourFunc = {
  upperCase: randomUppercase,
  lowerCase: randomLowercase,
  numbersCase: randomNumbers,
  symbolsCase: randomSymbols,
};

//////////////////////////////////////////////////////////////

// copy password event

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(result.textContent);
});

// Generate password event

generate.addEventListener("click", () => {
  let lengthVal = +length.value;
  let upperVal = upper.checked;
  let lowerVal = lower.checked;
  let numbersVal = numbers.checked;
  let symbolsVal = symbols.checked;

  result.textContent = generatePassword(
    lengthVal,
    upperVal,
    lowerVal,
    numbersVal,
    symbolsVal
  );
});

// generate password base on user choice

let generatePassword = (
  leng,
  upperCase,
  lowerCase,
  numbersCase,
  symbolsCase
) => {
  // init final password
  let finalPass = "";

  // get checked count
  let typeCount = upperCase + lowerCase + numbersCase + symbolsCase;

  if (typeCount === 0) {
    return "";
  }

  // filter only true checked
  let countsArray = [
    { upperCase },
    { lowerCase },
    { numbersCase },
    { symbolsCase },
  ].filter((item) => Object.values(item)[0]);

  // loop exactly as length
  for (let i = 0; i < leng; i += typeCount) {
    countsArray.forEach((type) => {
      const generatenow = Object.keys(type)[0];
      finalPass += allFourFunc[generatenow]();
    });
  }
  return finalPass.slice(0, leng);
};
