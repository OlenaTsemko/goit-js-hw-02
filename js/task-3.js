/* Задача 2 - 3---------------------------------------------
Поиск самого длинного слово в строке с пробелами
Напиши функцию findLongestWord(string = ""), 
которая принимает параметром произвольную строку
(в строке будут только слова и пробелы) и возвращает 
самое длинное слово в этой строке. */

const findLongestWord = function (string = '') {
  const words = string.split(' ');

  //   console.log(words);

  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
