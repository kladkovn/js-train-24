console.log("Завдання: 8 ==============================");

function task8() {
  function fetchFakeData(){
    const fakeData = {
       name: "John",
       age: 30,
      };
      return Promise.resolve(fakeData);
    }  // Створюємо fakeData константу з данними { name: "John",age: 30}
    
      // Створюємо функцію fetchFakeData, яка симулює запит до сервера та повертає "дані" через Promise.resolve().
      // Використовуємо Promise.resolve(fakeData) для того, щоб створити вже зарезолвлений проміс.
  fetchFakeData()    // Викликаємо функцію fetchFakeData
  .then((data) => {
    console.log(data);
  })    // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  .catch((error) => {
    console.log((error));
  })    // Якщо проміс виконаний з помилкою виводимо в консоль помилку
}

// Викликаємо функцію task8
task8();
