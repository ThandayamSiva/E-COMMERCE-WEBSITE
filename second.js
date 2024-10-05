const craeteSmartWatches = [
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917",
    caption: "40 Hours Playback",
    productName: "boAt Airdopes 161",
    currentPrice: "899",
    actuallPrice: "2,490",
    offer: "64 % Off",
  },
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049",
    caption: "60 Hours Playback",
    productName: "boAt Airdopes 131",
    currentPrice: "699",
    actuallPrice: "2,990",
    offer: "77 % Off",
  },
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_Alpha.jpg?v=1688452927",
    caption: "35 Hours Playback",
    productName: "boAt Airdopes Alpha",
    currentPrice: "749",
    actuallPrice: "4,499",
    offer: "78 % Off",
  },
  {
    topHeading: "Engraving Availbale",
    image:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_141.png?v=1703145765",
    caption: "42 Hours Playback",
    productName: "boAt Airdopes 141",
    currentPrice: "899",
    actuallPrice: "2490",
    offer: "64 % Off",
  },
];

function createBestSellerCards() {
  craeteSmartWatches.forEach((content) => {
    const div = document.createElement("div");
    const box = document.createElement("div");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const h1 = document.createElement("h1");

    const h11 = document.createElement("h1");
    const h22 = document.createElement("h2");
    const h33 = document.createElement("h2");

    h3.textContent = content.topHeading;
    h3.className = "topHeading";
    img.src = content.image;
    img.alt = "product-image";
    img.className = "productImage";
    h2.textContent = content.caption;
    h2.className = "caption";
    h1.textContent = content.productName;
    h1.className = "productName";
    h11.textContent = `₹${content.currentPrice}`;
    h11.className = "currentPrice";

    const box2 = document.createElement("div");
    h22.innerHTML = `<s>₹${content.actuallPrice}</s>`;
    h22.className = "actuallPrice";
    h33.textContent = content.offer;
    h33.className = "offer";

    box.appendChild(h3);
    box.appendChild(img);
    box.appendChild(h2);
    box.appendChild(h1);
    box.className = "box";

    div.appendChild(box);
    div.appendChild(h11);

    box2.appendChild(h22);
    box2.appendChild(h33);
    div.appendChild(box2);
    div.id = "product-container";

    box2.className = "bottom-price";

    const bestSellers = document.getElementById("best-sellers");
    bestSellers.appendChild(div);
  });
}

// Call the function to create best seller cards
createBestSellerCards();

// Display aside ::::::

const productContainers = document.querySelectorAll("#product-container");
productContainers.forEach((container, index) => {
  container.addEventListener("click", function () {
    const viewAsideRight = document.getElementById("aside");
    viewAsideRight.style.display = "block";

    // Get the correct product based on the container's index
    const product = craeteSmartWatches[index]; // Access the product using index

    const asideProductName = document.getElementById("aside-product-name");
    asideProductName.innerText = product.productName; // Set product name in the aside section

    const asideProductImage = document.getElementById("aside-product-image");
    asideProductImage.innerHTML = `<img src="${product.image}" alt="aside-image" />`;
    // asideProductImage.style.height = "200px";
    // asideProductImage.style.borderRadius = "16px";

    const asideProductCurrentPrice = document.getElementById(
      "aside-current-price"
    );
    asideProductCurrentPrice.innerText = `₹${product.currentPrice}`;

    const asideProductCurrentPrice2 = document.getElementById(
      "aside-current-price2"
    );
    asideProductCurrentPrice2.innerText = `₹${product.currentPrice}`;

    const asideProductActuallPrice = document.getElementById(
      "aside-actuall-price"
    );
    asideProductActuallPrice.innerHTML = `<s>₹${product.actuallPrice}<s/>`;

    const asideProductActuallPrice2 = document.getElementById(
      "aside-actuall-price2"
    );
    asideProductActuallPrice2.innerHTML = `<s>₹${product.actuallPrice}<s/>`;

    const asideProductOffer = document.getElementById("aside-product-offer");
    asideProductOffer.innerText = product.offer;

    const asideProductOffer2 = document.getElementById("aside-product-offer2");
    asideProductOffer2.innerText = product.offer;
  });
});

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
  // Get product details
  const cartProductName =
    document.getElementById("aside-product-name").textContent;
  const cartProductImage = document.getElementById("aside-product-image").src; // Get the image source
  const cartCurrentPrice = document.getElementById(
    "aside-current-price"
  ).textContent;
  const cartActualPrice = document.getElementById(
    "aside-actuall-price"
  ).textContent;
  const cartOffer = document.getElementById("aside-product-offer").textContent;

  // Log the details to the console
  console.log({
    cartProductImage,
    cartCurrentPrice,
    cartActualPrice,
    cartOffer,
  });

  // Create a new div for the cart item
  const cartDiv = document.createElement("div");
  cartDiv.classList.add("cart-item"); // Add class for styling

  // Create individual elements for the product details
  const ctImage = document.createElement("img");
  ctImage.src = cartProductImage; // Ensure the image src is set correctly
  ctImage.classList.add("cart-image"); // Add class for styling

  const detailsDiv = document.createElement("div"); // Div to hold the details
  detailsDiv.classList.add("cart-details");

  const ctProductName = document.createElement("h1");
  const ctCurrentPrice = document.createElement("h1");
  const ctActualPrice = document.createElement("h2");
  const ctOff = document.createElement("h3");

  ctProductName.innerText = `${cartProductName}`;
  ctCurrentPrice.innerText = `${cartCurrentPrice}`;
  ctActualPrice.innerHTML = `<s>${cartActualPrice}</s>`;
  ctOff.innerText = `${cartOffer}`;

  // Append the elements to the details div
  detailsDiv.appendChild(ctProductName);
  detailsDiv.appendChild(ctCurrentPrice);
  detailsDiv.appendChild(ctActualPrice);
  detailsDiv.appendChild(ctOff);

  // Append the image and the details div to the cart div
  cartDiv.appendChild(ctImage);
  cartDiv.appendChild(detailsDiv);

  // Append the cart div to the aside-cart-container
  const asideCartContainer = document.getElementById("aside-cart-container");
  asideCartContainer.appendChild(cartDiv);

  // Optional: Update the cart count (this part was in your code but not fully implemented)
  alert(`${cartProductName} has been added to your cart!`);
  // Update the cart count display
  count++;
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = count;
});

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    comment: "Excellent product! Highly recommend.",
    date: "2024-10-01",
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment: "Very good, but it could be improved.",
    date: "2024-10-02",
  },
  {
    name: "Bob Johnson",
    rating: 3,
    comment: "Average experience, nothing special.",
    date: "2024-10-03",
  },
  // Add more reviews as needed
];

function loadReviews(filter = "all") {
  const reviewsContainer = document.getElementById("reviewsContainer");
  reviewsContainer.innerHTML = ""; // Clear existing reviews

  const filteredReviews = reviews.filter((review) => {
    return filter === "all" || review.rating === parseInt(filter);
  });

  filteredReviews.forEach((review) => {
    const reviewElement = document.createElement("div");
    reviewElement.className = "border-b border-gray-300 py-2";
    reviewElement.innerHTML = `
      <h2 class="font-bold">${review.name} - ${review.rating} Stars</h2>
      <p>${review.comment}</p>
      <small class="text-gray-500">${review.date}</small>
    `;
    reviewsContainer.appendChild(reviewElement);
  });
}

// Initial load
loadReviews();

// Event listener for filter change
document.getElementById("filter").addEventListener("change", (event) => {
  loadReviews(event.target.value);
});

// Event listener for sorting by date (not implemented in this basic example)
document.getElementById("sortByDate").addEventListener("click", () => {
  const sortedReviews = reviews.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  loadReviews(); // Re-load with sorted reviews (you can modify the function to accept sorted reviews)
});
