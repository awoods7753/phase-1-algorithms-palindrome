function isPalindrome(word) {
  let wordSplit = word.split('')
  let wordArray = wordSplit.reverse()
  let wordReverse = wordArray.join('')
    if (word===wordReverse) {
     return true; 
   } else {
     return false;
  }
}

/* 
  function - isPalindrome(word)
 I need to seperate and reverse the word, then join it back together
 Add an if statement that checks the new word against the string with
 a return statement of true or false
*/

/*
  My function takes a word argument and splits the word into an array of letters, reverses those letters
  and then joins them back together. It then checks to see if the string that was implemented matches the joined and reversed string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
