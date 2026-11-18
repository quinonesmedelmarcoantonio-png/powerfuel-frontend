import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AcercaDe from './pages/AcercaDe';
import Productos from './pages/Productos';
import Terminos from './pages/Terminos'; 
import Carrito from './pages/Carrito';
import Perfil from './pages/Perfil'; // <-- ¡ESTA LÍNEA FALTABA!
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          
          {/* RUTA DE INICIO */}
          <Route path="/" element={
            <div style={{ padding: '40px', textAlign: 'center', color: '#000000' }}>
              <h1 style={{ color: '#FF6B00', fontSize: '40px' }}>Bienvenido a PowerFuel</h1>
              
              <h2 style={{ marginTop: '40px', color: '#000000' }}>🔥 Productos Recomendados (Más Vendidos)</h2>
              <p>Próximamente los mejores suplementos aquí.</p>
              
              <h2 style={{ marginTop: '40px', color: '#000000' }}>🏷️ Descuentos Especiales</h2>
              <p>Usa el código "POWERFUEL10" para tu primera compra.</p>
            </div>
          } />

          {/* RUTA DE PRODUCTOS */}
          <Route path="/productos" element={<Productos />} />
          
          {/* RUTA DE ACERCA DE */}
          <Route path="/acerca-de" element={<AcercaDe />} />

          {/* RUTA DE TÉRMINOS */}
          <Route path="/terminos" element={<Terminos />} />

          {/* RUTA DEL CARRITO */}
          <Route path="/carrito" element={<Carrito />} />

          {/* RUTA DEL PERFIL (Eliminar cuenta) */}
          <Route path="/perfil" element={<Perfil />} />
          
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;