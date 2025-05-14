// Add product to cart (stored in localStorage as array)
function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productName);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${productName} has been added to your cart!`);
    updateCartCount();
  }
  
  // Remove product from cart by index
  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCartItems();
    updateCartCount();
  }
  
  // Display cart items
  function loadCartItems() {
    const cartContainer = document.getElementById("cart-items");
    if (!cartContainer) return;
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartContainer.innerHTML = "";
  
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }
  
    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <p>${item}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartContainer.appendChild(div);
    });
  }
  
  // Update cart count icon
  function updateCartCount() {
    const countEl = document.getElementById("cart-count");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (countEl) countEl.textContent = cart.length;
  }
  
  // Set year and theme on load
  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
    }
    const footer = document.querySelector("footer p");
    if (footer) {
      footer.innerHTML = `&copy; ${new Date().getFullYear()} ShopSmart`;
    }
    updateCartCount();
    loadCartItems();
  });
  