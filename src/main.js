// // Elements and Variables
// const menuToggle = document.getElementById("menuToggle");
// const closeToggle = document.getElementById("closeToggle");
// const mobileViewNav = document.getElementById("mobile-view-navbar");
// const asideCLoseToggle = document.getElementById("asidecloseToggle");
// const cartContainer = document.getElementById("cart-container");
// const closeToggleCart = document.getElementById("closeToggle-cart");
// const placeholderTexts = [
//   "Search 'smart watches'",
//   "Search 'headphones'",
//   "Search 'Sound bar'",
//   "Search 'bluetooth'",
// ];
// let index = 0;
// let selectedQuantity = 1;
// let count = 0; // Initialize the cart count
// const maxStock = 10; // Maximum stock limit for each product

// // Menu Toggle Handlers
// menuToggle.addEventListener("click", () => {
//   menuToggle.style.display = "none";
//   closeToggle.style.display = "block";
//   mobileViewNav.style.display = "block";
//   document.getElementById("aside").style.display = "none";
// });

// closeToggle.addEventListener("click", () => {
//   menuToggle.style.display = "block";
//   closeToggle.style.display = "none";
//   mobileViewNav.style.display = "none";
// });

// asideCLoseToggle.addEventListener("click", () => {
//   document.getElementById("aside").style.display = "none";
// });

// // Cart Toggle Handlers
// cartContainer.addEventListener("click", () => {
//   document.getElementById("aside-cart-container").style.display = "block";
//   document.getElementById("aside").style.display = "block";
//   document.getElementById("aside-product-all-details").style.display = "none";
// });

// closeToggleCart.addEventListener("click", () => {
//   document.getElementById("aside-cart-container").style.display = "none";
//   document.getElementById("aside").style.display = "none";
//   document.getElementById("aside-product-all-details").style.display = "block";
// });

// // Placeholder Change Function
// function changePlaceholder() {
//   const inputField = document.getElementById("search-input");
//   inputField.placeholder = placeholderTexts[index];
//   index = (index + 1) % placeholderTexts.length;
// }
// setInterval(changePlaceholder, 2000); // Change placeholder every 2 seconds

// // Data for Best Sellers
// const bestSellers = [
//   {
//     topHeading: "Engraving Available",
//     image:
//       "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917",
//     caption: "40 Hours Playback",
//     productName: "boAt Airdopes 161",
//     currentPrice: "₹899",
//     actualPrice: "₹2,490",
//     offer: "64% Off",
//   },
//   // ...add other product objects here
// ];

// // Create Best Seller Cards
// function createBestSellerCards() {
//   const bestSellersContainer = document.getElementById("best-sellers");

//   bestSellers.forEach((content) => {
//     const div = document.createElement("div");
//     div.className = "product-card";

//     const topHeading = document.createElement("h3");
//     topHeading.className = "topHeading";
//     topHeading.textContent = content.topHeading;

//     const img = document.createElement("img");
//     img.className = "productImage";
//     img.src = content.image;
//     img.alt = "product-image";

//     const caption = document.createElement("h2");
//     caption.className = "caption";
//     caption.textContent = content.caption;

//     const productName = document.createElement("h1");
//     productName.className = "productName";
//     productName.textContent = content.productName;

//     const currentPrice = document.createElement("h1");
//     currentPrice.className = "currentPrice";
//     currentPrice.textContent = content.currentPrice;

//     const actualPrice = document.createElement("h2");
//     actualPrice.className = "actualPrice";
//     actualPrice.innerHTML = `<s>${content.actualPrice}</s>`;

//     const offer = document.createElement("h2");
//     offer.className = "offer";
//     offer.textContent = content.offer;

//     const priceContainer = document.createElement("div");
//     priceContainer.className = "price-container";
//     priceContainer.appendChild(actualPrice);
//     priceContainer.appendChild(offer);

//     div.appendChild(topHeading);
//     div.appendChild(img);
//     div.appendChild(caption);
//     div.appendChild(productName);
//     div.appendChild(currentPrice);
//     div.appendChild(priceContainer);

//     bestSellersContainer.appendChild(div);
//   });
// }

// createBestSellerCards(); // Call the function to render the best seller cards

// // Product Click Event
// const productContainers = document.querySelectorAll(".product-card");
// productContainers.forEach((container, index) => {
//   container.addEventListener("click", () => {
//     const product = bestSellers[index];

//     document.getElementById("aside").style.display = "block";
//     document.getElementById("aside-product-name").innerText =
//       product.productName;
//     document.getElementById(
//       "aside-product-image"
//     ).innerHTML = `<img src="${product.image}" alt="aside-image" />`;
//     document.getElementById("aside-current-price").innerText =
//       product.currentPrice;
//     document.getElementById(
//       "aside-actuall-price"
//     ).innerHTML = `<s>${product.actualPrice}</s>`;
//     document.getElementById("aside-product-offer").innerText = product.offer;
//   });
// });

// // Quantity Handlers
// function increaseQuantity() {
//   const quantityInput = document.getElementById("quantity-input");
//   if (selectedQuantity < maxStock) {
//     selectedQuantity++;
//     quantityInput.value = selectedQuantity;
//   } else {
//     alert(`Only ${maxStock} items available in stock!`);
//   }
// }

// function decreaseQuantity() {
//   const quantityInput = document.getElementById("quantity-input");
//   if (selectedQuantity > 1) {
//     selectedQuantity--;
//     quantityInput.value = selectedQuantity;
//   } else {
//     alert("Quantity can't be less than 1");
//   }
// }

// // Add to Cart
// document.getElementById("addToCart").addEventListener("click", () => {
//   const productName = document.getElementById("aside-product-name").innerText;
//   const productImage = document.querySelector("#aside-product-image img").src;
//   const productCurrentPrice = document.getElementById(
//     "aside-current-price"
//   ).innerText;
//   const productActualPrice = document.getElementById(
//     "aside-actuall-price"
//   ).innerHTML;
//   const productOffer = document.getElementById("aside-product-offer").innerText;

//   const cartItem = {
//     productName,
//     productImage,
//     productCurrentPrice,
//     productActualPrice,
//     productOffer,
//     quantity: selectedQuantity,
//   };

//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   cart.push(cartItem);
//   localStorage.setItem("cart", JSON.stringify(cart));

//   alert(`${productName} has been added to your cart!`);

//   count++;
//   document.getElementById("cart-count").textContent = count;
// });

// // Load Cart Items from Local Storage
// function loadCartItems() {
//   const cartDetailsContainer = document.getElementById("cart-details");
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];

//   cart.forEach((item) => {
//     const cartItem = document.createElement("div");
//     cartItem.className = "cart-item flex justify-between mb-4";

//     const cartImage = document.createElement("img");
//     cartImage.src = item.productImage;
//     cartImage.alt = item.productName;
//     cartImage.style.width = "50px";
//     cartImage.style.height = "50px";

//     const cartDetails = document.createElement("div");
//     cartDetails.className = "cart-details";

//     const cartProductName = document.createElement("h4");
//     cartProductName.textContent = item.productName;

//     const cartProductPrice = document.createElement("p");
//     cartProductPrice.textContent = `Price: ${item.productCurrentPrice}`;

//     const cartProductActualPrice = document.createElement("p");
//     cartProductActualPrice.innerHTML = `Original Price: <s>${item.productActualPrice}</s>`;

//     const cartProductQuantity = document.createElement("p");
//     cartProductQuantity.textContent = `Quantity: ${item.quantity}`;

//     const cartProductOffer = document.createElement("p");
//     cartProductOffer.textContent = `Offer: ${item.productOffer}`;

//     cartDetails.appendChild(cartProductName);
//     cartDetails.appendChild(cartProductPrice);
//     cartDetails.appendChild(cartProductActualPrice);
//     cartDetails.appendChild(cartProductQuantity);
//     cartDetails.appendChild(cartProductOffer);

//     cartItem.appendChild(cartImage);
//     cartItem.appendChild(cartDetails);

//     cartDetailsContainer.appendChild(cartItem);
//   });
// }

// window.onload = loadCartItems; // Load cart items on page load





// Initialize the cart count value outside the function to persist between clicks
let count = 0;

// Quantity and Stock Handling
let selectedQuantity = 1; // Default quantity for each product
const maxStock = 15; // Example: Maximum stock available for each product

// Quantity Selector - Increase
function increaseQuantity() {
  const quantityInput = document.getElementById("quantity-input");
  if (selectedQuantity < maxStock) {
    selectedQuantity++;
    quantityInput.value = selectedQuantity;
  } else {
    alert(`Only ${maxStock} items available in stock!`);
  }
}

// Quantity Selector - Decrease
function decreaseQuantity() {
  const quantityInput = document.getElementById("quantity-input");
  if (selectedQuantity > 1) {
    selectedQuantity--;
    quantityInput.value = selectedQuantity;
  } else {
    alert("Quantity can't be less than 1");
  }
}

// Add to Cart Button Click Handler
const addToCart = document.getElementById("addToCart");
addToCart.addEventListener("click", function () {
  // Get product details from the current selected product
  const productName = document.getElementById("aside-product-name").innerText;
  // console.log(productName)
  const productImageSrc = document
    .getElementById("aside-product-image")
    .querySelector("img").src;
  const productCurrentPrice = document.getElementById(
    "aside-current-price"
  ).innerText;
  const productActualPrice = document.getElementById(
    "aside-actuall-price"
  ).innerText;
  const productOffer = document.getElementById("aside-product-offer").innerText;

  // Create a cart item object
  const cartItem = {
    productName: productName,
    productImage: productImageSrc,
    productCurrentPrice: productCurrentPrice,
    productActualPrice: productActualPrice,
    productOffer: productOffer,
    quantity: selectedQuantity,
  };

  // Retrieve the cart from local storage or initialize an empty cart
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add the new item to the cart
  cart.push(cartItem);

  // Store the updated cart in local storage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Show a notification or alert that the product was added successfully
  alert(`${productName} has been added to your cart!`);

  // Update the cart count display
  count++;
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = count;
});

// Load Cart Items from Local Storage on Page Load
function loadCartItems() {
  const cartDetailsContainer = document.getElementById("cart-details");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.forEach((item) => {
    // Create a new div for each cart item
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item", "flex", "justify-between", "mb-4");

    // Create the product image element
    const cartImage = document.createElement("img");
    cartImage.src = item.productImage;
    cartImage.alt = item.productName;
    cartImage.style.width = "50px";
    cartImage.style.height = "50px";

    // Create the product details div
    const cartDetails = document.createElement("div");
    cartDetails.classList.add("cart-details");

    // Create product name, price, quantity, and offer elements
    const cartProductName = document.createElement("h4");
    cartProductName.textContent = item.productName;

    const cartProductPrice = document.createElement("p");
    cartProductPrice.textContent = `Price: ${item.productCurrentPrice}`;

    const cartProductActualPrice = document.createElement("p");
    cartProductActualPrice.innerHTML = `Original Price: <s>${item.productActualPrice}</s>`;

    const cartProductQuantity = document.createElement("p");
    cartProductQuantity.textContent = `Quantity: ${item.quantity}`;

    const cartProductOffer = document.createElement("p");
    cartProductOffer.textContent = `Offer: ${item.productOffer}`;

    // Append name, price, quantity, and offer to the cart details div
    cartDetails.appendChild(cartProductName);
    cartDetails.appendChild(cartProductPrice);
    cartDetails.appendChild(cartProductActualPrice);
    cartDetails.appendChild(cartProductQuantity);
    cartDetails.appendChild(cartProductOffer);

    // Append the image and details to the cart item div
    cartItem.appendChild(cartImage);
    cartItem.appendChild(cartDetails);

    // Append the cart item to the cart details container
    cartDetailsContainer.appendChild(cartItem);
  });
}

// Call the function to load cart items from local storage when the page loads
window.onload = loadCartItems;
