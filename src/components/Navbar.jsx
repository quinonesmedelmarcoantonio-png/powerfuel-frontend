import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h2 style={{ color: '#FF6B00', margin: 0 }}>PowerFuel</h2>
      </Link>
      
      <div className="nav-links">
        <Link to="/" style={{ color: '#000000', textDecoration: 'none', fontWeight: 'bold' }}>Inicio</Link>
        <Link to="/productos" style={{ color: '#000000', textDecoration: 'none', fontWeight: 'bold' }}>Productos</Link>
        <Link to="/acerca-de" style={{ color: '#000000', textDecoration: 'none', fontWeight: 'bold' }}>Acerca de</Link>
        <Link to="/terminos" style={{ color: '#000000', textDecoration: 'none', fontWeight: 'bold' }}>Términos</Link>
        <Link to="/perfil" style={{ color: '#000000', textDecoration: 'none', fontWeight: 'bold' }}>Perfil</Link>
        <Link to="/carrito" style={{ color: '#FF6B00', textDecoration: 'none', fontWeight: 'bold' }}>🛒 Carrito</Link>
      </div>

    </nav>
  );
};

export default Navbar;