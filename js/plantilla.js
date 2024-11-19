// Datos de productos
const products = [
    //Fila 1
    {
        id: "legging_running",
        name: "Legging Deportivo Running",
        image: "https://www.atmosmovement.com/dw/image/v2/BHFM_PRD/on/demandware.static/-/Sites-storefront_catalog_atmos/default/dwe7a96ee5/images/hi-res/Lookbok_Renombradas/Leggings-Para-Mujer-31230001-10_1.jpg?sw=700&sh=840",
        price: "S/109.99",
        description: "Este legging deportivo es ideal para tus entrenamientos de running, diseñado para ofrecerte comodidad y soporte durante tus carreras."
    },
    {
        id: "legging_gym",
        name: "Legging Deportivo Gym",
        image: "https://i.pinimg.com/736x/ea/26/41/ea26411a0de9cf88931aa5f92eca716a.jpg",
        price: "S/119.99",
        description: "Perfecto para tus sesiones de gimnasio, este legging combina elasticidad y transpirabilidad para que te muevas con total libertad."
    },
    //Fila 2
    {
        id: "vestido_primavera",
        name: "Vestido Casual Primavera",
        image: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/a7d50c99f6b89dc6a49d8881f3c425b3.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
        price: "S/99.99",
        description: "Disfruta de la frescura y comodidad de este vestido casual, ideal para tus salidas en la temporada de primavera."
    },
    {
        id: "vestido_verano",
        name: "Vestido Casual Verano",
        image: "https://www.bellayvale.pe/wp-content/uploads/2022/07/07042022-DSC01463-Editar.jpg",
        price: "S/149.99",
        description: "Diseñado para los días cálidos, este vestido casual de verano te hará destacar con estilo y comodidad."
    },
    //Fila 3
    {
        id: "polo_oversize",
        name: "Polo Deportivo Oversize",
        image: "https://www.alphafit.pe/cdn/shop/files/polo-oversize-mujer-ropa-deportiva-mujer-alphafit-peru-1-33267849068757.jpg?v=1697668011",
        price: "S/89.99",
        description: "Un polo deportivo con estilo oversize que te brinda comodidad y libertad de movimiento para tus actividades diarias."
    },
    {
        id: "polo_crop",
        name: "Polo Deportivo Crop",
        image: "https://plazavea.vteximg.com.br/arquivos/ids/28285804-300-300/imageUrl_1.jpg?v=638349681978400000",
        price: "S/99.99",
        description: "Este polo deportivo crop es perfecto para un look moderno mientras te ejercitas o disfrutas de tu día."
    },
    //Fila 4
    {
        id: "conjunto_relaxed",
        name: "Conjunto Relaxed",
        image: "https://d3fvqmu2193zmz.cloudfront.net/ProductCatalog/Workspace.CWDQQL6GUIJMS/ProductCatalog.C3EYU7VPI5IIK/1500x1500/C3EZ2XTZUYNQU.jpg",
        price: "S/229.99",
        description:  "Un conjunto relajado que combina estilo y comodidad, ideal para tus días de descanso o actividades casuales."
    },
    {
        id: "conjunto_regular",
        name: "Conjunto Regular",
        image: "https://http2.mlstatic.com/D_NQ_NP_870364-MLA69508203241_052023-O.webp",
        price: "S/249.99",
        description: "Este conjunto regular ofrece un ajuste clásico y materiales de alta calidad para cualquier ocasión."
    }
];

// Función para obtener el producto seleccionado (por ID en la URL)
function getSelectedProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id'); // Obtiene el parámetro "id" de la URL
    return products.find(product => product.id === productId) || products[0]; // Devuelve el producto o el primero como predeterminado
}

// Función para renderizar el producto en la plantilla
function renderProductDetails() {
    const product = getSelectedProduct();

    // Selecciona elementos HTML
    const nameElement = document.getElementById('product-name');
    const imageElement = document.getElementById('product-image');
    const priceElement = document.getElementById('product-price');
    const descriptionElement = document.getElementById('text-description'); // Nuevo elemento para la descripción


    // Inserta datos dinámicos
    nameElement.textContent = product.name;
    imageElement.src = product.image;
    imageElement.alt = product.name;
    priceElement.innerHTML = `<span><b>${product.price}</b></span>`;
    descriptionElement.textContent = product.description; // Agrega la descripción

}


// Ejecuta la función para completar la plantilla
renderProductDetails();
