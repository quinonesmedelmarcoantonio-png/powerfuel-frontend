import React from 'react';

const Terminos = () => {
  return (
    <div style={{ padding: '40px', color: '#000000', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#FF6B00', textAlign: 'center', marginBottom: '30px' }}>Términos y Condiciones</h1>
      <p style={{ marginTop: '20px', lineHeight: '1.8', fontSize: '16px' }}>
        Bienvenido a PowerFuel. Al acceder a este sitio web, aceptas cumplir con los siguientes términos:
        Los suplementos vendidos aquí no están destinados a diagnosticar, tratar o curar enfermedades.
        Todos los precios están sujetos a cambio sin previo aviso. 
        El uso de este sitio es responsabilidad del usuario.
      </p>
    </div>
  );
};

export default Terminos;