// Importa React y los Hooks: useState (estado), useEffect (efectos/peticiones) y useContext (estado global).
import React, { useEffect, useState, useContext } from 'react';

// Importa Axios, la librería para hacer peticiones HTTP a la API de Java.
import axios from 'axios';

// Importa el contexto del carrito para poder usar sus funciones (como addToCart) en este componente.
import { CartContext } from '../context/CartContext';

//(Lista los productos y los agrega al carrito).
const Productos = () => {
  const [productos, setProductos] = useState([]);
  const { addToCart } = useContext(CartContext);

  //carga los productos del api
  useEffect(() => {
    axios.get('http://localhost:8080/api/productos')
      .then(res => setProductos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="contenedor-principal">
      <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>PROTEÍNAS</h1>
      <p style={{ marginTop: '15px', lineHeight: '1.6', color: '#333' }}>
        Compra proteína en México con envío a todo el país. En <strong>PowerFuel</strong> encontrarás el catálogo más completo.
      </p>
      
      <div className="grid-productos">
        {productos.length === 0 ? (
          <p>No hay productos en la base de datos.</p>
        ) : (
          productos.map(prod => (
            <div key={prod.id_producto} className="tarjeta-producto">
              
              <img 
                src={prod.imagen || 'https://via.placeholder.com/250x250?text=Sin+Imagen'} 
                alt={prod.nombre} 
                className="imagen-producto"
              />
              
              <div style={{ marginTop: '15px' }}>
                <h3 className="precio-producto">${prod.precio}</h3>
                <h4 className="nombre-producto">{prod.nombre}</h4>
                <p className="marca-producto">{prod.marca || 'PowerFuel'}</p>
                <p className="stock-producto">En stock</p>
                
                <button onClick={() => addToCart(prod)} className="btn-agregar">
                  Agregar al Carrito
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Productos;