const urlEncode = function(text) {
  let encodedText = '';
  
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      // If there's a space, add %20 to the encoded string
      encodedText += '%20';
    } else {
      // Otherwise, add the character as-is
      encodedText += text[i];
    }
  }
  
  return encodedText;
};

console.log(urlEncode("Lighthouse Labs")); // Output: Lighthouse%20Labs
console.log(urlEncode(" Lighthouse Labs ")); // Output: %20Lighthouse%20Labs%20
console.log(urlEncode("blue is greener than purple for sure")); // Output: blue%20is%20greener%20than%20purple%20for%20sure
