import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
    setCart([...cart, producto]);
    alert(`¡${producto.nombre} agregado!`);
  };

  const clearCart = () => setCart([]);
  const total = cart.reduce((acc, prod) => acc + prod.precio, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};