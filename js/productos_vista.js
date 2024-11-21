const inputQuantity = document.querySelector('.input-quantity');
const btnIncrement= document.querySelector('#increment');
const btnDecrement= document.querySelector('#decrement');

let valueByDefault = parseInt(inputQuantity.value);

//Funcion CLick

btnIncrement.addEventListener('click', () => {
    //1=1+1
    if (valueByDefault < 10) {  // Si la cantidad es menor que 10
        valueByDefault += 1;     // Incrementa la cantidad
        inputQuantity.value = valueByDefault;
    } else {
        console.log(alert("Cantidad maxima de compra"));
    }
});

btnDecrement.addEventListener('click', () => {
    //1=1-1
    if (valueByDefault > 1) {  // Si la cantidad es mayor que 1
        valueByDefault -= 1;     // Decrementa la cantidad
        inputQuantity.value = valueByDefault;
    } else {
        console.log(alert("La cantidad no puede ser menor que 1"));
    }
});



//Toggle
//Constante Toggle Titles
const toggleDescription = document.querySelector('.title-description');
const toggleAdditionalInformation=document.querySelector('.title-additional-information');

//Cconstantes Contenido Texto
const contentDescription = document.querySelector('.text-description');
const contentAdditionalInformation=document.querySelector('.text-additional-information');

//Funcion Toggle
toggleDescription.addEventListener('click', () => {
    contentDescription.classList.toggle('hidden');
});

toggleAdditionalInformation.addEventListener('click', () => {
    contentAdditionalInformation.classList.toggle('hidden');
});



// Obtener los elementos de color, talla y cantidad
const colourSelect = document.getElementById('colour');
const sizeSelect = document.getElementById('size');
const quantityInput = document.querySelector('.input-quantity');

// Obtener el botón Limpiar
const btnClean = document.querySelector('.btn-clean');

// Añadir el evento para limpiar los campos
btnClean.addEventListener('click', function() {
    // Restaurar los valores predeterminados
    colourSelect.selectedIndex = 0; // Resetea el valor de color
    sizeSelect.selectedIndex = 0;   // Resetea el valor de talla
    quantityInput.value = 1;        // Resetea la cantidad a 1
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtener los elementos de color, talla y cantidad
    const colourSelect = document.getElementById('colour');
    const sizeSelect = document.getElementById('size');
    const quantityInput = document.querySelector('.input-quantity');
    const btnClean = document.querySelector('.btn-clean');

    // Añadir el evento para limpiar los campos
    btnClean.addEventListener('click', function() {
        // Restaurar los valores predeterminados
        colourSelect.selectedIndex = 0; // Resetea el valor de color
        sizeSelect.selectedIndex = 0;   // Resetea el valor de talla
        quantityInput.value = 1;        // Resetea la cantidad a 1
    });
});