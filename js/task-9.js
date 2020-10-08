/* Задача 2-9
Есть массив logins с логинами пользователей. 
Напиши скрипт добавления логина в массив logins. 
Добавляемый логин должен:

- проходить проверку на длину от 4 до 16-ти символов включительно
- быть уникален, то есть отсутствовать в массиве logins

Разбей задачу на подзадачи с помощью функций.
Проверку на отсутствие аргументов или на правильный 
тип аргументов делать не нужно.

1. Напиши функцию isLoginValid(login), в которой проверь 
количество символов параметра login и верни true или false 
в зависимости от того, попадает ли длина параметра 
в заданный диапазон от 4-х до 16-ти символов включительно.

2. Напиши функцию isLoginUnique(allLogins, login), 
которая принимает список всех логинов и добавляемый логин 
как параметры и проверяет наличие login в массиве allLogins, 
возвращая true если такого логина еще нет и false 
если логин уже используется.

3. Напиши функцию addLogin(allLogins, login) которая:
- Принимает новый логин и массив всех логинов как параметры
- Проверяет валидность логина используя вспомогательную 
функцию isLoginValid
- Если логин не валиден, прекратить исполнение функции addLogin 
и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
- Если логин валиден, функция addLogin проверяет уникальность 
логина с помощью функции isLoginUnique
- Если isLoginUnique вернет false, тогда addLogin не добавляет 
логин в массив и возвращает строку 'Такой логин уже используется!'
- Если isLoginUnique вернет true, addLogin добавляет новый логин 
в logins и возвращает строку 'Логин успешно добавлен!'


🔔 Принцип единственной ответственности функции 
- каждая функция делает что-то одно. Это позволяет 
переиспользовать код и изменять логику работы функции только 
в одном месте, не затрагивая работу программы в целом.

Предикатные функции возвращают только true или false. 
Такие функции принято называть начиная с is: isLoginUnique 
и isLoginValid в нашем случае.

- isLoginUnique только проверяет есть ли такой логин в 
массиве и возвращает true или false.
- isLoginValid только проверяет валидный ли логин 
и возвращает true или false.
- addLogin добавляет или не добавляет логин в массив. 
При этом для проверок условия добавления использует результаты 
вызовов других функций - isLoginUnique и isLoginValid. */

const isLoginValid = (login, min = 4, max = 16) =>
  login.length >= min && login.length <= max;

const isLoginUnique = (allLogins, login) => !allLogins.includes(login);

function addLogin(allLogins, login) {
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';

  if (!isLoginValid(login)) {
    return ERROR;
  } else if (!isLoginUnique(allLogins, login)) {
    return REFUSAL;
  } else {
    allLogins.push(login);
    console.log(allLogins);
  }

  return SUCCESS;
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax'));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// рабочий вариант

// const isLoginValid = login => login.length >= 4 && login.length <= 16;

// const isLoginUnique = (allLogins, login) =>
//   allLogins.includes(login) ? false : true;

// function isLoginUnique(allLogins, login) {
//   if (allLogins.includes(login)) {
//     return false;
//   }
//   return true;
// }

// const addLogin = function (allLogins, login) {
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;

//   if (
//     isLoginValid(login) === true &&
//     isLoginUnique(allLogins, login) === true
//   ) {
//     allLogins.push(login);
//     console.log(logins);
//     message = SUCCESS;
//     return message;
//   } else if (isLoginValid(login) === false) {
//     message = ERROR;
//     return message;
//   } else if (isLoginUnique(allLogins, login) === false) {
//     message = REFUSAL;
//     return message;
//   }
// };

// function addLogin(allLogins, login) {
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';

//   if (isLoginValid(login) === false) {
//     return ERROR;
//   }

//   if (isLoginUnique(allLogins, login) === false) {
//     return REFUSAL;
//   }

//   if (isLoginUnique(allLogins, login) === true) {
//     allLogins.push(login);
//     // console.log(logins);
//   }

//   return SUCCESS;
// }
