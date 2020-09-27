/* Задача 2-7
Создание нового массива на основе отбора из исходного массива
Напиши функцию filterArray(array), принимающую 1 параметр array 
- массив. Функция проверяет каждое значение массива - 
является ли значение конечным числом (Number.isFinite). 
Для проверки используй цикл for. Числа добавляются в новый 
массив numbers с помощью метода push, а не числа - игнорируются. 
По завершению проверки массива array возвращается массив numbers. */

const filterArray = function (array) {
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    // if (Number.isFinite(array[i]) === true) {
    //   numbers.push(array[i]);
    // }

    if (Number.isFinite(array[i])) {
      numbers.push(array[i]);
    }
  }
  return numbers;
};

console.log(filterArray([-2, 0, 2]));
// [-2, 0, 2]

console.log(filterArray([1, NaN, Infinity]));
// [1]

console.log(filterArray([0, -0, 100, '100']));
// [0, 0, 100]

console.log(filterArray([undefined, false, null, [], 1]));
// [1]

console.log(filterArray([{}, () => {}, 2]));
// [2]
