import React from 'react';

const AcercaDe = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center', color: '#000000' }}>
      <h1 style={{ color: '#FF6B00' }}>Acerca de PowerFuel</h1>
      <p style={{ maxWidth: '800px', margin: '20px auto', lineHeight: '1.6', fontSize: '18px', color: '#000000' }}>
        En <strong>PowerFuel</strong> somos apasionados por el fitness y la nutrición deportiva. 
        Nuestra misión es proveer suplementos de la más alta calidad para ayudarte a alcanzar tus metas.
      </p>
      <p style={{ maxWidth: '800px', margin: '20px auto', lineHeight: '1.6', fontSize: '18px', color: '#000000' }}>
        Este sistema fue desarrollado como proyecto final para la materia de Desarrollo Web, 
        utilizando <strong>React</strong> en el frontend y <strong>Spring Boot</strong> en el backend.
      </p>
    </div>
  );
};

export default AcercaDe;