/* Задача 2-4------------------------------------------------------
Форматирование строки в зависимости от длинны строки
Напиши функцию formatString(string, maxLength = 40) 
которая принимает строку и форматирует ее если необходимо.

- Если длина строки не превышает maxLength, 
функция возвращает ее в исходном виде.
- Если длина больше maxLength, то функция обрезает строку до 
размера maxLength символов и добавляет в конец строки троеточие ..., 
после чего возвращает укороченную версию. */

const formatString = function (string, maxLength = 40) {
  if (string.split('').length < maxLength) {
    return string;
  }
  string = `${string.slice(0, maxLength)}...`;
  return string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'

// через тернарник
// function formatString(string, maxLength = 40) {
//   return string.length >= maxLength
//     ? string.slice(0, maxLength).concat('...')
//     : string;
// }

// сплайс + джоин
// const formatString = function (string, maxLength = 40) {
//   const newLength = string.split('');
//   if (newLength.length >= maxLength) {
//     newLength.splice(maxLength, newLength.length - 1, '...');
//   }
//   return newLength.join('');
// };
