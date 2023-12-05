function isPalindrome(word) {
  // Write your algorithm here
  let charCount = word.length
  let wordBackwards = "";

  for (let i = charCount - 1; i >= 0; i--) {
    wordBackwards += word.charAt(i)
  }

  if (wordBackwards == word) {
    return true
  }
  else {
    return false
  }

}
isPalindrome('racecar')

/* 
  Add your pseudocode here

  We want to create a function 'isPalindrome' that receives a string as an input. 

  We want to take that string input and store what is is spelled backwards into a variable.

    To do this, we need to find the length of the input word, and then iterate through each letter, starting with the last letter, appending it to a new string variable.

  We then need to compare the newly created string variable with the input to see if they are equal to each other.

  If they are, we return true. If not, we return false.

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false")
  console.log("=>", isPalindrome("324nm"))

  console.log("Expecting: true")
  console.log("=>", isPalindrome("saippuakivikauppias"))
}

module.exports = isPalindrome;
