//Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string. Example string : 'Web Development Tutorial'

//Finding the longest word in a string:
function longestWord(str) {
  const words = str.split(" ");
  let longest = "";
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

const longest = longestWord("Web Development Tutorial");
console.log(longest); // Output: 'Development'
