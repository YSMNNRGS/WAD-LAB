const countVowelsArrow = (text) => {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (const ch of text) {
    if (vowels.indexOf(ch) !== -1) {
      count++;
    }
  }
  return count;
};
console.log("Vowels with arrow in 'honorificabilitudinitatibus':", countVowelsArrow("honorificabilitudinitatibus"));
console.log("Vowels with arrow in 'Riphah International University':", countVowelsArrow("Riphah International University"));
