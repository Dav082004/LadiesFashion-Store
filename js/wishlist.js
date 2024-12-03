document.addEventListener("DOMContentLoaded", () => {
    const wishlistIcon = document.getElementById("wishlist-icon");
    const wishlistModal = document.getElementById("wishlist-modal");
    const closeWishlist = document.getElementById("close-wishlist");
    const wishlistItems = document.getElementById("wishlist-items");
    const addToWishlistButtons = document.querySelectorAll(".add-to-wishlist");
    const downloadPdfButton = document.getElementById("download-pdf");

    // Lista de deseos como arreglo
    const wishlist = [];

    // Abrir la ventana emergente de la lista de deseos
    wishlistIcon.addEventListener("click", () => {
        wishlistModal.classList.remove("hidden");
    });

    // Cerrar la ventana emergente
    closeWishlist.addEventListener("click", () => {
        wishlistModal.classList.add("hidden");
    });

    // Añadir un producto a la lista de deseos
    addToWishlistButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const productElement = event.target.parentElement; // El contenedor del producto
            const productName = productElement.querySelector("h3").innerText;

            // Evitar duplicados en la lista de deseos
            if (!wishlist.includes(productName)) {
                wishlist.push(productName);
                updateWishlistUI();
            } else {
                alert("Este producto ya está en tu lista de deseos.");
            }
        });
    });

    // Actualizar la interfaz de la lista de deseos
    function updateWishlistUI() {
        wishlistItems.innerHTML = ""; // Limpiar la lista actual

        wishlist.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.classList.add("wishlist-item");

            const itemName = document.createElement("span");
            itemName.innerText = item;

            const removeButton = document.createElement("button");
            removeButton.innerHTML = "&#128465;"; // Icono de basura
            removeButton.classList.add("remove-item");

            // Eliminar un producto de la lista de deseos
            removeButton.addEventListener("click", () => {
                const index = wishlist.indexOf(item);
                if (index > -1) {
                    wishlist.splice(index, 1); // Eliminar del arreglo
                    updateWishlistUI(); // Actualizar la interfaz
                }
            });

            listItem.appendChild(itemName);
            listItem.appendChild(removeButton);
            wishlistItems.appendChild(listItem);
        });

        // Actualizar el contador en el icono de la lista de deseos
        document.querySelector(".wishlist-icon .count").innerText = wishlist.length;
    }
    
    // Función para descargar el PDF
    downloadPdfButton.addEventListener("click", () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Título del PDF con un estilo llamativo
        doc.setFontSize(20);
        doc.setTextColor(240, 84, 84); // Color principal de Ladies Fashion
        doc.setFont("helvetica", "bold");
        doc.text("Lista de Deseos - Ladies Fashion", 20, 20);

        // Subtítulo
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0); // Texto en negro
        doc.text("¡Aquí están los productos que te encantan!", 20, 30);

        // Separador visual
        doc.setDrawColor(240, 84, 84); // Color del separador
        doc.line(20, 35, 190, 35);

        // Agregar los productos de la wishlist
        let y = 45; // Empieza debajo del separador
        wishlist.forEach((item, index) => {
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0); // Texto en negro

            // Formato del item (negrita para el número, normal para el nombre del producto)
            doc.text(`${index + 1}.`, 20, y);
            doc.setFont("helvetica", "normal");
            doc.text(item, 30, y);

            y += 10; // Espacio entre los productos
        });

        // Paginación
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(10);
            doc.text(`Página ${i} de ${pageCount}`, 180, 285, null, null, "right");
        }

        // Footer con agradecimiento
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150); // Color gris para el footer
        doc.text("Gracias por elegir Ladies Fashion", 20, 290);

        // Guardar el PDF
        doc.save("wishlist_ladies_fashion.pdf");
    });
});