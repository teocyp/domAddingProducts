// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const ulTag = document.querySelector('#list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let productInput = form.elements.product;
    let quantityInput = form.elements.qty;
    const newElement = document.createElement('li');
    newElement.innerText = `${productInput.value} - ${quantityInput.value}`;
    ulTag.appendChild(newElement);
    productInput.value = '';
    quantityInput.value = '';
})
