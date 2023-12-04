console.log("Завдання: 9 ==============================");

function task9() {
  function fetchWithError(){
    const errorMessage = "Помилка при з'єднанні з сервером";    // Створюємо константу errorMessage в яку записуємо рядок "Помилка при з'єднанні з сервером"
    return Promise.reject(errorMessage); 
  }    // Створюємо функцію fetchWithError, яка симулює помилку при запиті до сервера.
  fetchWithError()
    .then((data) =>{
      console.log(data);
    })
   // Використовуємо Promise.reject(errorMessage) для створення вже відхиленого промісу.
    .catch((error) => {
      console.log(error);
    }) // Викликаємо функцію fetchWithError
      // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
      // Якщо проміс виконаний з помилкою виводимо в консоль помилку
}

// Викликаємо функцію task10
task9();
