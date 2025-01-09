import React, { useEffect } from 'react';

const ProductPage: React.FC = () => {
  useEffect(() => {
    const product = JSON.parse(localStorage.getItem('productDetails') || '{}');

    // Update Product Info
    const updateProductInfo = () => {
      const productImage = document.getElementById('productImage') as HTMLImageElement;
      const productTitle = document.getElementById('productTitle') as HTMLElement;
      const productPrice = document.getElementById('productPrice') as HTMLElement;
      const productDescription = document.getElementById('productDescription') as HTMLElement;
      const productSpecifications = document.getElementById('productSpecifications') as HTMLElement;

      productImage.src = product.image;
      productTitle.textContent = product.name;
      productPrice.textContent = `$${product.price}`;
      productDescription.textContent = product.description;
      productSpecifications.textContent = product.specifications;

      // Rating as Stars
      const ratingDiv = document.getElementById('productRating') as HTMLElement;
      if (ratingDiv) {
        ratingDiv.innerHTML = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
      }

      // Show reviews
      const reviewsDiv = document.getElementById('productReviews') as HTMLElement;
      if (reviewsDiv) {
        reviewsDiv.innerHTML =
          product.reviews?.length > 0
            ? product.reviews.map((review: string) => `<p>${review}</p>`).join('')
            : '<p>No reviews yet.</p>';
      }
    };

    // Increment/Decrement buttons
    const handleQuantityControls = () => {
      const quantityInput = document.getElementById('quantity') as HTMLInputElement;
      const incrementButton = document.getElementById('increment') as HTMLElement;
      const decrementButton = document.getElementById('decrement') as HTMLElement;

      incrementButton?.addEventListener('click', () => {
        quantityInput.value = (parseInt(quantityInput.value) + 1).toString();
      });

      decrementButton?.addEventListener('click', () => {
        if (parseInt(quantityInput.value) > 1) {
          quantityInput.value = (parseInt(quantityInput.value) - 1).toString();
        }
      });
    };

    // Add to Cart button
    const handleAddToCart = () => {
      const addToCartButton = document.getElementById('addToCart') as HTMLElement;
      const quantityInput = document.getElementById('quantity') as HTMLInputElement;

      addToCartButton?.addEventListener('click', () => {
        const loggedInUser = localStorage.getItem('loginUsers');

        if (!loggedInUser) {
          alert('Please log in first to add items to the cart.');
          window.location.href = 'login.html'; // Redirect to login page
          return;
        }

        const quantity = parseInt(quantityInput.value);
        const cartItem = { ...product, quantity };

        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${product.name} has been added to your cart!`);
      });
    };

    updateProductInfo();
    handleQuantityControls();
    handleAddToCart();
  }, []);

  return null; // This script runs without rendering anything specific.
};

export default ProductPage;
