console.log("Завдання: 8 ==============================");

function task8() {
  fetchFakeData(Promise.resolve())    // Створюємо функцію fetchFakeData, яка симулює запит до сервера та повертає "дані" через Promise.resolve().
  const fakeData = { name: "John",age: 30};    // Створюємо fakeData константу з данними { name: "John",age: 30}
  Promise.resolve((fakeData) => {
    console.log(fakeData);
  })    // Використовуємо Promise.resolve(fakeData) для того, щоб створити вже зарезолвлений проміс.
  fetchFakeData()    // Викликаємо функцію fetchFakeData
  .then((values) => {
    console.log(values);
  })    // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  .catch((error) => {
    console.log(('Error', error));
  })    // Якщо проміс виконаний з помилкою виводимо в консоль помилку
}

// Викликаємо функцію task8
task8();
