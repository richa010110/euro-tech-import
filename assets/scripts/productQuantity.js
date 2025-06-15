const productQuantities = document.querySelectorAll(".product-quantity");
if (!!productQuantities) {
    productQuantities.forEach((quantity) => {
        const minus = quantity.querySelector('button[data-btn="minus"]');
        const plus = quantity.querySelector('button[data-btn="plus"]');
        const input = quantity.querySelector("input");

        minus.addEventListener("click", () => input.value > 1 && input.value--);
        plus.addEventListener("click", () => input.value++);
    });
}
