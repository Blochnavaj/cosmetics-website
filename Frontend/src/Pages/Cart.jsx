import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { FaTrash } from "react-icons/fa";  // Trash Icon

function Cart() {
  const { currency, products, cartItem, addToCard, removeFromCart, deleteFromCart } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (!products || products.length === 0) return; 

    const tempData = [];
    for (const itemId in cartItem) {
      const product = products.find((p) => String(p._id) === String(itemId));
      if (product) {
        tempData.push({
          _id: itemId,
          name: product.name,
          image: cartItem[itemId]?.image || product.image[0], 
          price: product.price,
          quantity: cartItem[itemId],
        });
      }
    }

    setCartData(tempData);
  }, [cartItem, products]);

  // Calculate total price
  const totalPrice = cartData.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-5 text-center">Shopping Cart</h1>

      {cartData.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty 😞</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {cartData.map((item) => (
            <div key={item._id} className="flex flex-col sm:flex-row items-center sm:justify-between bg-gray-100 p-4 rounded-lg w-full">
              {/* Product Image */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
              />

              {/* Product Details */}
              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-600">{currency} {item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center mt-3 sm:mt-0">
                <button 
                  onClick={() => removeFromCart(item._id)} 
                  className="px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded-l"
                >-</button>
                <span className="px-4">{item.quantity}</span>
                <button 
                  onClick={() => addToCard(item._id)} 
                  className="px-2 py-1 bg-gray-300 hover:bg-gray-400 rounded-r"
                >+</button>
              </div>

              {/* Remove Item Button */}
              <button 
                onClick={() => deleteFromCart(item._id)} 
                className="ml-4 text-red-500 hover:text-red-700 mt-3 sm:mt-0"
              >
                <FaTrash size={20} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Total Price & Checkout */}
      {cartData.length > 0 && (
        <div className="mt-10 text-right sm:text-right">
          <h2 className="text-xl font-bold">Total: {currency} {totalPrice.toFixed(2)}</h2>
          <button className="mt-3 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
