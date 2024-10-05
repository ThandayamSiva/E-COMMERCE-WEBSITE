const smartWatches = [
  {
    topHeading: "New Arrival",
    image: "https://example.com/smartwatch1.jpg",
    caption: "Up to 7 Days Battery Life",
    productName: "boAt Smart Watch 101",
    currentPrice: "1,699",
    actualPrice: "3,499",
    offer: "51% Off",
    rating: 4.5,
  },
  {
    topHeading: "Best Seller",
    image: "https://example.com/smartwatch2.jpg",
    caption: "AMOLED Display",
    productName: "boAt Smart Watch 102",
    currentPrice: "2,499",
    actualPrice: "4,999",
    offer: "50% Off",
    rating: 4.7,
  },
  {
    topHeading: "Limited Stock",
    image: "https://example.com/smartwatch3.jpg",
    caption: "Water Resistant",
    productName: "boAt Smart Watch 103",
    currentPrice: "1,899",
    actualPrice: "3,999",
    offer: "53% Off",
    rating: 4.2,
  },
];

// Function to create smartwatches cards dynamically
function createSmartWatchCards() {
  const watchesContainer = document.getElementById("watches-container");
  watchesContainer.innerHTML = ""; // Clear existing watches

  smartWatches.forEach((watch) => {
    const div = document.createElement("div");
    div.className = "watch-card";

    const heading = document.createElement("h3");
    heading.textContent = watch.topHeading;
    heading.className = "topHeading";

    const img = document.createElement("img");
    img.src = watch.image;
    img.alt = "Smartwatch image";
    img.className = "watch-image";

    const productName = document.createElement("h2");
    productName.textContent = watch.productName;
    productName.className = "productName";

    const caption = document.createElement("h4");
    caption.textContent = watch.caption;
    caption.className = "caption";

    const price = document.createElement("div");
    price.innerHTML = `<strong>₹${watch.currentPrice}</strong> <s>₹${watch.actualPrice}</s> (${watch.offer})`;
    price.className = "price";

    const rating = document.createElement("p");
    rating.textContent = `Rating: ${watch.rating} stars`;
    rating.className = "rating";

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.className = "add-to-cart-btn";

    // Add event listener to button
    addToCartButton.addEventListener("click", () => {
      addToCart(watch);
      alert(`${watch.productName} has been added to your cart!`);
    });

    // Append elements to div
    div.appendChild(heading);
    div.appendChild(img);
    div.appendChild(productName);
    div.appendChild(caption);
    div.appendChild(price);
    div.appendChild(rating);
    div.appendChild(addToCartButton);

    // Append the card to the container
    watchesContainer.appendChild(div);
  });
}

// Add to cart functionality
let cart = [];

function addToCart(watch) {
  cart.push(watch);
  updateCart();
}

// Function to update cart UI
function updateCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = ""; // Clear cart before updating

  cart.forEach((watch, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <img src="${watch.image}" alt="${watch.productName}" class="cart-image"/>
      <div>
        <h3>${watch.productName}</h3>
        <p><strong>₹${watch.currentPrice}</strong> <s>₹${watch.actualPrice}</s> (${watch.offer})</p>
        <p>Rating: ${watch.rating} stars</p>
      </div>
    `;

    // Add Remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";
    removeButton.addEventListener("click", () => {
      cart.splice(index, 1); // Remove item from cart
      updateCart(); // Update the cart UI
    });

    cartItem.appendChild(removeButton);
    cartContainer.appendChild(cartItem);
  });

  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length; // Update cart count
}

// Call the function to create smartwatches cards
createSmartWatchCards();
