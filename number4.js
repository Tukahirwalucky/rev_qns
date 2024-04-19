//Write a JavaScript function that returns a string that has letters in alphabetical order. Example string : 'webmaster' Expected Output : 'abeemrstw'

//Sorting a string alphabetically:
function sortString(str) {
  return str.split("").sort().join("");
}

const sorted = sortString("webmaster");
console.log(sorted); // Output: 'abeemrstw'9
