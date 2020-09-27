/* Задача 2-5-------------------------------------------------
Функция предикат
Функция предикат возвращает true или false

Напиши функцию checkForSpam(message), 
принимающую 1 параметр message - строку. 
Функция проверяет ее на содержание слов spam и sale. 
Если нашли запрещенное слово то функция возвращает true, 
если запрещенных слов нет функция возвращает false. 
Слова в строке могут быть в произвольном регистре. */

// const checkForSpam = function (str) {
//   str = str.toLowerCase();

//   //   console.log(str);
//   //   console.log(str.includes('sale') || str.includes('spam'));
//   return str.includes('sale') || str.includes('spam');
// };

function checkForSpam(str) {
  str = str.toLowerCase();
  return str.includes('sale') || str.includes('spam');
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
