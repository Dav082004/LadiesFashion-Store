// Evento que se ejecuta cuando todo el contenido del DOM está cargado
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el botón del carrito para mostrar/ocultar el carrito
    const btnCart = document.querySelector('.container-cart-icon');
    // Selecciona el contenedor del carrito de productos
    const containerCartProducts = document.querySelector('.container-cart-products');

    // Agrega un evento de clic al botón del carrito
    btnCart.addEventListener('click', () => {
        // Alterna la clase 'hidden-cart' para mostrar/ocultar el carrito
        containerCartProducts.classList.toggle('hidden-cart');
    });
}); 

// Selecciona el contenedor del producto en el carrito (solo el primero en este caso)
const cartInfo = document.querySelector('.cart-product')

// Selecciona la fila de productos (solo el primer contenedor)
const rowProduct = document.querySelector('.row-product')

// Selecciona la lista de productos
const productsList = document.querySelector('.product-table')

// Inicializa un arreglo vacío para almacenar los productos en el carrito
let allProducts = []

// Selecciona el elemento que muestra el valor total a pagar
const valorTotal = document.querySelector('.total-pagar')

// Selecciona el contador de productos en el carrito
const countProducts = document.querySelector('#contador-productos')

// Agrega un evento de clic a la lista de productos
productsList.addEventListener('click', e => {
    // Verifica si el clic fue sobre el botón para agregar al carrito
    if(e.target.classList.contains('btn-add-cart')){
        const product = e.target.parentElement; // Selecciona el producto (el elemento contenedor)

        // Crea un objeto con la información del producto
        const infoProduct = {
            quantity: 1, // Inicializa la cantidad en 1
            title: product.querySelector('.product-name').textContent, // Obtiene el título del producto
            price: parseFloat(product.querySelector('.product-price').textContent.replace('S/', '')), // Obtiene el precio, eliminando el prefijo 'S/'
        };

        // Verifica si el producto ya existe en el carrito
        const exits = allProducts.some(prod => prod.title === infoProduct.title);

        // Si el producto ya existe en el carrito, aumenta la cantidad
        if(exits){
            allProducts = allProducts.map(prod => {
                if (prod.title === infoProduct.title) {
                    prod.quantity++;  // Incrementa la cantidad del producto existente
                }
                return prod;  // Devuelve el producto actualizado o no actualizado
            });
        } else {
            // Si el producto no existe en el carrito, lo agrega
            allProducts.push(infoProduct);
        }

        // Llama a la función que actualiza la interfaz del carrito
        updateCartUI();
    }
});

// Función para actualizar la interfaz del carrito
function updateCartUI() {
    rowProduct.innerHTML = ''; // Limpia el contenido actual del carrito

    let total = 0;  // Variable para almacenar el total a pagar
    let totalProducts = 0; // Variable para almacenar el número total de productos

    // Recorre todos los productos en el carrito y actualiza la interfaz
    allProducts.forEach((product, index) => {
        const container = document.createElement('div'); // Crea un nuevo contenedor para el producto
        container.classList.add('cart-product'); // Le agrega la clase 'cart-product'

        // Inserta el contenido HTML con la información del producto en el contenedor
        container.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">S/${(product.price * product.quantity).toFixed(2)}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        `;

        // Agrega el contenedor al elemento 'rowProduct'
        rowProduct.appendChild(container);

        // Actualiza el total y el total de productos
        total += product.price * product.quantity;
        totalProducts += product.quantity;

        // Agrega un evento al ícono de cerrar para eliminar el producto del carrito
        const iconClose = container.querySelector('.icon-close');
        iconClose.addEventListener('click', () => {
            // Elimina el producto de 'allProducts' en el índice correspondiente
            allProducts.splice(index, 1);
            updateCartUI(); // Vuelve a actualizar la interfaz del carrito
        });
    });

    // Actualiza el valor total y el contador de productos
    valorTotal.textContent = `S/${total.toFixed(2)}`;
    countProducts.textContent = totalProducts;
}

