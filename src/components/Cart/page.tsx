import React, { useState, useEffect } from "react";

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
    updateCartDisplay(cart);
  }, []);

  const isUserLoggedIn = (): boolean => {
    const loginUsers = JSON.parse(localStorage.getItem("loginUsers") || "[]");
    return loginUsers.length > 0;
  };

  const updateCartDisplay = (cart: any[]) => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalAmount(total);
  };

  const handleDeleteItem = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedCart = [...cartItems];
    if (newQuantity > 0) {
      updatedCart[index].quantity = newQuantity;
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    }
  };

  const handleBuyNow = () => {
    if (!isUserLoggedIn()) {
      alert("Please log in to proceed with your purchase.");
      window.location.href = "/login";
      return;
    }

    if (cartItems.length === 0 || totalAmount === 0) {
      alert("Your cart is empty. Please add items to your cart before proceeding.");
      window.location.href = "/products";
    } else {
      window.location.href = "/checkout";
      localStorage.setItem("lastPurchaseAmount", totalAmount.toFixed(2));
      localStorage.setItem("cart", JSON.stringify([])); // Clear cart after purchase
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      <div className="space-y-6">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={item.id} className="flex justify-between items-center border-b pb-4">
              <img src={item.image} className="w-32 h-32 object-cover mr-4" alt={item.name} />
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>
                  Quantity:{" "}
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    className="quantity-input w-16 text-center border rounded mb-2"
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                  />
                </p>
                <p className="text-gray-700">{item.description}</p>
                <button
                  className="px-4 py-2 bg-red-500 mt-4 text-white rounded"
                  onClick={() => handleDeleteItem(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="text-lg font-semibold mt-4">Total: ${totalAmount.toFixed(2)}</div>

      <button
        className="px-6 py-3 bg-blue-500 text-white rounded mt-4"
        onClick={handleBuyNow}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Cart;
