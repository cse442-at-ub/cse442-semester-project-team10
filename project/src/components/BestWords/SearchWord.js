import dictionary from '../../data/dictionary.json'
import letterValues from '../../data/letterValues.json'

export default function BestWords(letters) {
    // letters = 'ther';
    let words = Object.keys(dictionary);
    letters = letters.toLowerCase();
    let dummyLetters = letters;
    
    let validWords = [];
    for (index = 0; index < words.length; index++) {
      let word = words[index];
      let valid = true;
      for (j = 0; j < word.length; j++) {
        if (!dummyLetters.includes(word[j])) {
          valid = false
        }
        dummyLetters = dummyLetters.replace(word[j],"",1);
  
      }
      if (valid) {
        validWords.push(word);
      }
      dummyLetters = letters
    }
  
    let items = [];
    for (index = 0; index < validWords.length; index++) { 
      let scoreArray = validWords[index].split("").map(letter => letterValues[letter.toUpperCase()])
      let score = scoreArray.reduce((accum, val) => (accum+val))
      let item = {score: score, word: validWords[index], key: index.toString()};
      items.push(item);
    } 
  
    return (
      items.sort((a,b)=> b.score - a.score)
    );
    // orderedList = items.sort((a,b)=> b.score - a.score)
    
    
  }