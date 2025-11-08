function countVowels(text) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (const ch of text) {
    if (vowels.indexOf(ch) !== -1) {
      count++;
    }
  }
  return count;
}

console.log("Vowels in 'Web Application Development':", countVowels("Web Application Development"));
console.log("Vowels in 'Riphah International University':", countVowels("Riphah International University"));
