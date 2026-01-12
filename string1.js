function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseWords("Java is fun")); 


// second question 
function isRotation(s1, s2) {
    if (s1.length !== s2.length) return false;
    return (s1 + s1).includes(s2);
}

// Example
console.log(isRotation("ABCD", "CDAB")); // true


// 3rd question
function runLengthEncode(str) {
    if (str.length === 0) return "";

    let result = "";
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            result += str[i - 1] + count;
            count = 1;
        }
    }

    return result;
}

// Example
console.log(runLengthEncode("aaabbc")); // "a3b2c1"


