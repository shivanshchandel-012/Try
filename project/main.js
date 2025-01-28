const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.textContent = "↑";
scrollToTopBtn.classList.add("scroll-to-top");
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// const links = document.querySelectorAll('a');
// const loader = document.getElementById('loader');

// function showLoaderAndRedirect(event, url) {
//     event.preventDefault(); 
//     loader.style.display = 'flex'; 

//     setTimeout(() => {
//         window.location.href = url; 
//     }, 1500); 
// }

// links.forEach(link => {
//     if (link.href) {
//         link.addEventListener('click', (event) => {
//             showLoaderAndRedirect(event, link.href);
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartCount = document.getElementById("cart-count");
    const cartIcon = document.getElementById("cart-icon");

    // Create a cart popup element
    const cartPopup = document.createElement("div");
    cartPopup.className = "cart-popup";
    cartPopup.style.display = "none";
    document.body.appendChild(cartPopup);

    // Handle Add to Cart
    document.querySelectorAll(".add-to-cart").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const name = btn.getAttribute("data-name");
            const price = parseFloat(btn.getAttribute("data-price"));

            // Check if the item already exists in the cart
            const existingItem = cart.find((item) => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1; // Increment quantity
            } else {
                cart.push({ name, price, quantity: 1 }); // Add new item
            }
            updateCartCount();
            displayCartPopup();

            // Show a temporary popup message for adding to the cart
            showTemporaryPopup(`${name} added to the cart!`);
        });
    });

    // Update Cart Count
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }

    // Toggle Cart Popup
    cartIcon.addEventListener("click", (e) => {
        e.preventDefault();

        if (cartPopup.style.display === "none") {
            displayCartPopup();
        } else {
            cartPopup.style.display = "none"; // Close the popup
        }
    });

    // Display Cart Popup with Items
    function displayCartPopup() {
        if (cart.length === 0) {
            cartPopup.innerHTML = "<p>Your cart is empty!</p>";
        } else {
            const cartItems = cart
                .map(
                    (item, index) =>
                        `<div class="cart-item">
                            <p>${item.name} - $${item.price.toFixed(2)}</p>
                            <div class="cart-controls">
                                <button class="decrease-btn" data-index="${index}">-</button>
                                <span>${item.quantity}</span>
                                <button class="increase-btn" data-index="${index}">+</button>
                                <button class="remove-btn" data-index="${index}">X</button>
                            </div>
                        </div>`
                )
                .join("");

            const totalPrice = cart.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );

            cartPopup.innerHTML = `
                <h4>Your Cart:</h4>
                ${cartItems}
                <hr>
                <p>Total: $${totalPrice.toFixed(2)}</p>
            `;

            // Add event listeners for controls
            cartPopup.querySelectorAll(".increase-btn").forEach((btn) =>
                btn.addEventListener("click", (e) => {
                    const index = parseInt(btn.getAttribute("data-index"), 10);
                    cart[index].quantity += 1;
                    updateCartCount();
                    displayCartPopup();
                })
            );

            cartPopup.querySelectorAll(".decrease-btn").forEach((btn) =>
                btn.addEventListener("click", (e) => {
                    const index = parseInt(btn.getAttribute("data-index"), 10);
                    if (cart[index].quantity > 1) {
                        cart[index].quantity -= 1;
                    } else {
                        cart.splice(index, 1); // Remove item if quantity reaches 0
                    }
                    updateCartCount();
                    displayCartPopup();
                })
            );

            cartPopup.querySelectorAll(".remove-btn").forEach((btn) =>
                btn.addEventListener("click", (e) => {
                    const index = parseInt(btn.getAttribute("data-index"), 10);
                    cart.splice(index, 1); // Remove item
                    updateCartCount();
                    displayCartPopup();
                })
            );
        }

        cartPopup.style.display = "block"; // Show the popup
    }

    // Temporary Popup Message
    function showTemporaryPopup(message) {
        const tempPopup = document.createElement("div");
        tempPopup.className = "temporary-popup";
        tempPopup.textContent = message;

        document.body.appendChild(tempPopup);

        setTimeout(() => {
            tempPopup.remove();
        }, 2000); // Temporary popup disappears after 2 seconds
    }
});
