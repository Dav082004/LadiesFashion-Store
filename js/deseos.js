document.addEventListener("DOMContentLoaded", () => {
    const wishlistIcon = document.getElementById("wishlist-icon");
    const wishlistModal = document.getElementById("wishlist-modal");
    const closeWishlist = document.getElementById("close-wishlist");
    const wishlistItems = document.getElementById("wishlist-items");
    const addToWishlistButtons = document.querySelectorAll(".add-to-wishlist");

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
});