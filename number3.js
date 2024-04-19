//Write a JavaScript function that generates all combinations of a string.Example string : 'dog' Expected Output : d, do, dog, o, og, g

//Generating all combinations of a string:
function generateCombinations(str) {
  const combinations = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      combinations.push(str.slice(i, j));
    }
  }
  return combinations;
}

const combinations = generateCombinations("dog");
console.log(combinations);
