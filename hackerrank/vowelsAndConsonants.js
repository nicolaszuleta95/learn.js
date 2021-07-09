/**
 *print each vowel of the String s in order on a new line, then print
    each consonant in order on a new line. Return nothing.
 * @param {*} s string
 */
function vowelsAndConsonants(s) {
  let vowels = ["a", "e", "i", "o", "u"];
  for (const char of s) {
    if (vowels.includes(char)) {
      console.log(char);
    }
  }
  for (const char of s) {
    if (vowels.includes(char) === false) {
      console.log(char);
    }
  }
}

s = "javascriptloops";
vowelsAndConsonants(s);

//Solution only looping Once

// function vowelsAndConsonants(s) {
//     const vowels = 'aeiou';
//     var consonants = '';

//     for(var i = 0; i < s.length; i++) {
//        if (vowels.includes(s[i])) {
//            console.log(s[i]);
//        }
//        else {
//            consonants += s[i] + '\n';
//        }
//     }

//     console.log(consonants.trim());
// }
