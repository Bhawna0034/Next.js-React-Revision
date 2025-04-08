"use client";
import React, { useState } from "react";

const ShoppingCart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "T-shirts", price: 499 },
    { id: 2, name: "Jeans", price: 799 },
    { id: 3, name: "Dresses", price: 1299 },
    { id: 4, name: "Kurta Set", price: 899 },
    { id: 5, name: "Saree", price: 1899 },
  ]);
  const [nextId, setNextId] = useState(6);

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const addItem = () => {
    const newItem = {
      id: nextId,
      name: "Shirts",
      price: 699,
    };
    setItems([...items, newItem]);
    setNextId(nextId + 1);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">Shopping Cart</h1>
      <table className="w-full text-left border-collapse mb-4">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-300 px-4 py-2">Sno.</th>
            <th className="border border-gray-300 px-4 py-2">Item</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.price}
                </td>
                <td className="ml-4">
                 
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-6 bg-red-500 text-white font-bold px-4 py-2"
                  >
                    Remove Item
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Total Price: ₹{totalPrice} </p>

      <div className="flex gap-4 items-center">
        <button
          onClick={addItem}
          className="bg-green-500 text-white font-bold px-4 py-2"
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
