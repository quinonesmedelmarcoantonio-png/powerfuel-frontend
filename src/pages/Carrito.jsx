import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Carrito = () => {
  const { cart, clearCart, total } = useContext(CartContext);

  return (
    <div style={{ padding: '40px', color: '#000', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#FF6B00', textAlign: 'center' }}>Tu Carrito</h1>
      {cart.length === 0 ? <p style={{textAlign: 'center'}}>El carrito está vacío.</p> : (
        <div>
          {cart.map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ccc', padding: '10px' }}>
              <span>{item.nombre}</span>
              <span>${item.precio}</span>
            </div>
          ))}
          <h2 style={{ textAlign: 'right', marginTop: '20px' }}>Total: ${total}</h2>
          <button onClick={clearCart} style={{ marginTop: '20px', padding: '10px', backgroundColor: '#FF6B00', color: 'white', border: 'none', borderRadius: '5px' }}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};
export default Carrito;