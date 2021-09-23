// Variables
const form = document.getElementById("discount-form");
const displayResult = document.getElementById("results-display");
const loader = document.getElementById("loader");
const showPrice = document.querySelector(".show-price");
const showDiscount = document.querySelector(".show-discount");
const showTotalCost = document.querySelector(".show-total-cost");
const showSavedCost = document.querySelector(".show-saved-cost");

//Form Submit
form.addEventListener("submit", function (e) {
  // Hide Results
  displayResult.style.display = "none";

  // Show Loader before display Result
  loader.style.display = "block";

  setTimeout(computeResult, 2000);

  e.preventDefault();
});

// Compute the product Result
function computeResult() {
  const price = document.getElementById("price").value;
  const discount = document.getElementById("discount").value;

  //To 2 places of decimal point
  let discountAmount = CalculateDiscountPercent(price, discount).toFixed(2);
  let currentCost = (price - discountAmount).toFixed(2);
  let savedCost = (price - currentCost).toFixed(2);

  // Display textContent of the table
  showPrice.innerHTML = price;
  showDiscount.innerHTML = discount;
  showTotalCost.innerHTML = currentCost;
  showSavedCost.innerHTML = savedCost;

  if (isFinite(discountAmount)) {
    // Display Result if check is complete
    displayResult.style.display = "block";

    // Hide Loader from user
    loader.style.display = "none";
  } else {
    alert("Please check your numbers");
  }

  form.reset();
}

// Calculate the percentage Discount% of the product
function CalculateDiscountPercent(priceInput, discountInput) {
  return priceInput * (discountInput / 100);
}
