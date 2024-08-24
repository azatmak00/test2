
function extractNumbers(str) {
    return str.match(/\d+/g).map(Number);
}
console.log(extractNumbers("a1fg5hj6")); // выведет [1, 5, 6]


function printFibonacci(prev = 0, current = 1) {
    if (current > 144) return;
    console.log(current);
    setTimeout(() => printFibonacci(current, prev + current), 1000);
}
printFibonacci();


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


document.querySelector('div').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = event.target.textContent;
    }
});


document.getElementById('toggleButton').addEventListener('click', function() {
    const block = document.getElementById('block');
    block.style.display = block.style.display === 'none' ? 'block' : 'none';
});


let count = 0;
const counter = document.getElementById('counter');
const interval = setInterval(() => {
    counter.textContent = ++count;
    if (count === 100) clearInterval(interval);
}, 1);


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