// 1. Функция для извлечения чисел из строки
function extractNumbers(str) {
    return str.match(/\d+/g).map(Number);
}
console.log(extractNumbers("a1fg5hj6")); // выведет [1, 5, 6]

// 2. Функция рекурсия для вывода чисел Фибоначчи с задержкой
function printFibonacci(prev = 0, current = 1) {
    if (current > 144) return;
    console.log(current);
    setTimeout(() => printFibonacci(current, prev + current), 1000);
}
printFibonacci();

// 3. Запрос на API с использованием async/await и try/catch
async function fetchProductTitles() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        data.forEach(product => console.log(product.title));
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}
fetchProductTitles();

// 4. Делегирование событий для изменения цвета фона
document.querySelector('div').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = event.target.textContent;
    }
});

// 5. Кнопка для отображения/скрытия блока
document.getElementById('toggleButton').addEventListener('click', function() {
    const block = document.getElementById('block');
    block.style.display = block.style.display === 'none' ? 'block' : 'none';
});

// 6. Счётчик до 100
let count = 0;
const counter = document.getElementById('counter');
const interval = setInterval(() => {
    counter.textContent = ++count;
    if (count === 100) clearInterval(interval);
}, 1);

// 7. Кнопка для отправки GET запроса и вывода данных из JSON
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.getElementById('fetchButton').addEventListener('click', fetchData);