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

