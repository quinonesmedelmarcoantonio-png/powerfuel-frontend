import React from 'react';
import axios from 'axios';

const Perfil = () => {
  const eliminarCuenta = () => {
    if(window.confirm("¿Seguro que quieres eliminar tu cuenta y todos tus datos?")) {
      axios.delete('http://localhost:8080/api/usuarios/1')
        .then(() => alert("Cuenta eliminada correctamente (Derechos ARCO)"))
        .catch(() => alert("Error al eliminar"));
    }
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center', color: '#000000' }}>
      <h1 style={{ color: '#FF6B00' }}>Mi Perfil</h1>
      <p>Aquí puedes gestionar tus datos personales.</p>
      <button onClick={eliminarCuenta} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Eliminar mi cuenta
      </button>
    </div>
  );
};
export default Perfil;