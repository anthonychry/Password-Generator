
//variables that link to the html
  var generateEl = document.querySelector("#generate");
  var copyEl = document.querySelector("#copy");
  var textareaEl = document.querySelector("#password");

//empty array to store password characters
  var passwordArray = [];

  function process() {
 
//questions and prompts to customize password
  var qLength = prompt("How long would you like your password? Enter value between 8-128.");
    if (qLength < 8 || qLength > 128) {
      return process();
    }
    if (qLength === false) {
      return process();
    }
  var qBigger = confirm("Would you like UPPERCASE letters?");
  var qLower = confirm("Would you like lowercase letters?");
  var qNumbers = confirm("Would you like numbers?");
  var qChar = confirm("Would you like special characters?");

//Arrays for password randomization
  var specChar = ["[", "]", "\\", "/", "^", "$", "|", "?", "*", "+", "(", ")"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var smallLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//pushing arrays for whatever is selected by user
  var randomize = [];

//conditionals to push character arrays into randomize array
  if(qBigger){
    randomize.push(...bigLetters);
  }
  if(qLower){
    randomize.push(...smallLetters);
  }
  if(qNumbers){
    randomize.push(...numbers);
  }
  if(qChar){
    randomize.push(...specChar);
  }

//clears the textarea if password was previously generated
  while(passwordArray.length > 0) {
    passwordArray.pop();
  }

//loop to select random characters within the randomize array & converting array into string without quotations & commas
  for (var i = 0; i < qLength; i++){
    passwordArray.push(randomize[Math.floor(Math.random() * randomize.length - 1)])
    var convertString = passwordArray.join("");
  }
  //pushing function into HTML to make generated password visible.
    textareaEl.textContent = convertString;

};
  //event when generate password button is clicked
  generateEl.addEventListener("click", process)

  //function to copy text to clipboard
  function copyText () {
    getPassword = textareaEl;
    getPassword.select();
    document.execCommand("copy");
  };
  
  //event listener to copy text and runs through copyText function
  copyEl.addEventListener("click", copyText);

