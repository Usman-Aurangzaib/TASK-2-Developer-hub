import React, { useState } from 'react';
import './App.css';

const Checkout = () => {
  // Product prices
  const price1 = 300.99;
  const price2 = 200.99;

  // Quantity state
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);

  // Shipping info state
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    phone: '',
    city: '',
    zip: ''
  });

  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState('');

  const updateTotalPrice = () => {
    return (quantity1 * price1) + (quantity2 * price2);
  };

  const handleQuantityChange = (productId: number, action: 'increment' | 'decrement') => {
    if (productId === 1) {
      setQuantity1(prev => action === 'increment' ? prev + 1 : Math.max(1, prev - 1));
    } else {
      setQuantity2(prev => action === 'increment' ? prev + 1 : Math.max(1, prev - 1));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof typeof shippingInfo) => {
    setShippingInfo({
      ...shippingInfo,
      [field]: e.target.value
    });
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const purchaseData = {
      orderSummary: [
        { product: "MacBook Pro", color: "Space Grey", price: price1, quantity: quantity1 },
        { product: "Google Pixel 10", color: "Black", price: price2, quantity: quantity2 }
      ],
      shippingInfo,
      paymentMethod
    };

    localStorage.setItem("purchaseData", JSON.stringify(purchaseData));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-8">
      {/* Order Summary Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
        <div className="space-y-4">
          {/* Item 1 */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <img src="https://i.pinimg.com/736x/4e/8b/c7/4e8bc740300bb4fbb0481aecc7c9889e.jpg" alt="Product" className="w-16 h-16 object-cover rounded-lg" />
              <div>
                <h3 className="text-sm font-medium">MacBook Pro</h3>
                <p className="text-gray-500 text-xs">Color: Space Grey</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">${(quantity1 * price1).toFixed(2)}</p>
              <div className="flex items-center space-x-2 mt-1">
                <button className="text-xs bg-gray-200 px-2 py-1 rounded-full" onClick={() => handleQuantityChange(1, 'decrement')}>-</button>
                <p className="text-sm">{quantity1}</p>
                <button className="text-xs bg-gray-200 px-2 py-1 rounded-full" onClick={() => handleQuantityChange(1, 'increment')}>+</button>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <img src="https://i.pinimg.com/736x/4d/90/30/4d9030a369a66ef8f4bbe3d2ee613785.jpg" alt="Product" className="w-16 h-16 object-cover rounded-lg" />
              <div>
                <h3 className="text-sm font-medium">Google Pixel 10</h3>
                <p className="text-gray-500 text-xs">Color: Black</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">${(quantity2 * price2).toFixed(2)}</p>
              <div className="flex items-center space-x-2 mt-1">
                <button className="text-xs bg-gray-200 px-2 py-1 rounded-full" onClick={() => handleQuantityChange(2, 'decrement')}>-</button>
                <p className="text-sm">{quantity2}</p>
                <button className="text-xs bg-gray-200 px-2 py-1 rounded-full" onClick={() => handleQuantityChange(2, 'increment')}>+</button>
              </div>
            </div>
          </div>
        </div>

        {/* Total Price */}
        <div className="flex justify-between items-center mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold">Total</h3>
          <p className="text-xl font-bold text-green-500">${updateTotalPrice().toFixed(2)}</p>
        </div>
      </section>

      {/* Shipping Information Form */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shipping Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Full Name</label>
              <input type="text" id="name" value={shippingInfo.name} onChange={(e) => handleInputChange(e, 'name')} className="w-full p-3 mt-1 bg-gray-50 border rounded-lg" placeholder="Enter your full name" required />
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-700">Address</label>
              <input type="text" id="address" value={shippingInfo.address} onChange={(e) => handleInputChange(e, 'address')} className="w-full p-3 mt-1 bg-gray-50 border rounded-lg" placeholder="Enter your address" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                <input type="text" id="phone" value={shippingInfo.phone} onChange={(e) => handleInputChange(e, 'phone')} className="w-full p-3 mt-1 bg-gray-50 border rounded-lg" placeholder="Enter your phone number" required />
              </div>
              <div>
                <label htmlFor="city" className="block text-gray-700">City</label>
                <input type="text" id="city" value={shippingInfo.city} onChange={(e) => handleInputChange(e, 'city')} className="w-full p-3 mt-1 bg-gray-50 border rounded-lg" placeholder="Enter your city" required />
              </div>
            </div>
            <div>
              <label htmlFor="zip" className="block text-gray-700">Zip Code</label>
              <input type="text" id="zip" value={shippingInfo.zip} onChange={(e) => handleInputChange(e, 'zip')} className="w-full p-3 mt-1 bg-gray-50 border rounded-lg" placeholder="Enter your zip code" required />
            </div>
          </div>
        </form>
      </section>

      {/* Payment Method Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Method</h2>
        <form>
          <div className="space-y-4">
            <div>
              <input type="radio" id="credit-card" name="payment-method" value="Credit/Debit Card" onChange={handlePaymentMethodChange} className="mr-2" />
              <label htmlFor="credit-card" className="text-gray-700">Credit/Debit Card</label>
            </div>
            <div>
              <input type="radio" id="paypal" name="payment-method" value="PayPal" onChange={handlePaymentMethodChange} className="mr-2" />
              <label htmlFor="paypal" className="text-gray-700">PayPal</label>
            </div>
            <div>
              <input type="radio" id="cod" name="payment-method" value="Cash on Delivery" onChange={handlePaymentMethodChange} className="mr-2" />
              <label htmlFor="cod" className="text-gray-700">Cash on Delivery</label>
            </div>
          </div>
        </form>
      </section>

      {/* Submit Button */}
      <div className="mt-6 text-center">
        <button type="submit" className="px-6 py-3 text-white bg-green-500 hover:bg-green-600 rounded-full">Complete Purchase</button>
      </div>
    </div>
  );
};

export default Checkout;
